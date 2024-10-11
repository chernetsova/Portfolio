<template>
  <div>
    <v-container v-if="isLoad">
      <v-row justify="center">
        <v-col class="text-center">
          <v-progress-circular
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col>
          <span>Найдено: </span> <span> {{ countOrders }} товаров</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn  
            prepend-icon="mdi-align-horizontal-center" 
            color="blue-darken-4"
            @click="openFilter"
          >
            Фильтр
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-if="isDetailFilter">
        <v-col>
          <v-card title="Детальная информация">
            <v-container>
              <v-row>
                <v-col>
                  <Detailing :data="detailOrder" />
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <v-table 
            id="tableOrders" 
            fixed-header
          >
            <thead>
              <tr>
                <th>Номер заказа</th>
                <th>Дата-время создания заказа</th>
                <th>Статус заказа</th>
                <th>Тип отгрузки</th>
                <th>Дата отгрузки</th>
                <th>Способ оплаты</th>
                <th>Место отгрузки (адрес магазина)</th>
                <th>ФИО клиента</th>
                <th>Сумма заказа</th>
                <th>Количество товаров в заказе</th>
                <th>Кто создал заказ (оператор)</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in pageData"
                :key="item.id"
                @click="showDetailingOrder(item.id)"
              >
                <td>{{ item.uid1c }}</td>
                <td>{{ item.created }}</td>
                <td :class="`status_${item.status.id}`">{{ item.status.title }}</td>
                <td>{{ item.shipment.method.title }}</td>
                <td>{{ item.shipment.date }}</td>
                <td>{{ item.payment.method.title }}</td>
                <td>{{ item.shop.title }}</td>
                <td>{{ item.client.firstname}} {{ item.client.lastname }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.operator }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <v-pagination
            v-model="page"
            :length="lengthPage"
            :total-visible="7"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    fullscreen
  >
    <v-card>
      <v-toolbar>
        <v-btn
          icon="mdi-close"
          @click="dialog = false"
        ></v-btn>

        <v-toolbar-title>Детальная информация</v-toolbar-title>
      </v-toolbar>
      <Detailing :data="detailOrder" />
    </v-card>
  </v-dialog>

  <v-dialog
    v-model="filter"
    width="500"
  >
    <v-card title="Фильтр">
      <v-container>
        <v-row>
          <v-col>
            <v-switch 
              v-model="filterMore"
              label="Расширенный фильтр"
              color="primary"
              :value="true"
            ></v-switch>
          </v-col>
        </v-row>
        <template v-if="filterMore">
        <v-row>
          <v-col>
            <v-text-field
              v-model="dateFrom"
              label="Начало периода"
              prepend-inner-icon="mdi-calendar-month"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="dateTo"
              label="Конец периода"
              prepend-inner-icon="mdi-calendar-month"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select
              v-model="statusSelect"
              :items="statusList"
              label="Статус заказа"
              item-title="title"
              item-value="id"
              multiple
            ></v-select>
          </v-col>
        </v-row>
      </template>
        <v-row v-else>
          <v-col>
            <v-text-field 
              v-model="numberOrder"
              label="Номера заказа"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="text-center">
            <v-btn color="blue-darken-4" @click="runFilter">Искать</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
    <v-alert
      id="alert"
      v-model="alert"
      color="error"
      :title="alertTitle"
      :text="alertText"
      closable
    ></v-alert>
    </div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
import { useStore } from 'vuex';
import { getOrders, getDetailingOrder } from "./api/index.js";
import Detailing from "./components/Detailing.vue";

export default {

  components: { 
    Detailing
  },

  setup() {

    let alert = ref(false);
    let alertText = ref("");
    let alertTitle = ref("");
    let load = ref(true);
    const store = useStore();
    let page = ref(1);
    let countOrders = ref(0);
    let lengthPage = ref(0);
    let pageData = ref([]);
    let dialog = ref(false);
    let filter= ref(false);
    let filterMore = ref(false);
    let numberOrder = ref("");
    let detailFilter = ref(false);
    let statusList = [
      {id: 0, title: 'Неизвестный статус заказа'},
      {id: 1, title: 'Заказ обрабатывается'},
      {id: 2, title: 'Заказ обработан'},
      {id: 3, title: 'Не хватило товара для резервирования'},
      {id: 4, title: 'Заказ выполнен'},
      {id: 5, title: 'Заказ отменен'},
      {id: 6, title: 'Заказ зарезервирован'},
    ];
    let statusSelect = ref([]);
    let dateFrom = ref("");
    let dateTo = ref("");

    let isLoad = computed(() => load.value === true);
    let listOrders = computed(() => store.getters.getListOrders);
    let isListOrders = computed(() => typeof listOrders.value !== 'undefined' && listOrders.value.length > 0);
    let detailOrder = computed(() => store.getters.getDetailOrder);
    let isDetailFilter = computed(() => detailFilter.value === true);
    let isFilterMore = computed(() => filterMore.value === true);

    const updateLoad = (flag) => load.value = flag;

    const updateCountOrders = (count) => countOrders.value = count;

    const getLengthPage = (count) => Math.round(count/10);
    const updateLengthPage = (l) => lengthPage.value = l;
    const updatePageDate = (data) => pageData.value = data;

    const updateDialog = (flag) => dialog.value = flag;

    const getPageData = () => {
      let from = (page.value - 1) * 10;
      let to = page.value * 10;
      let arr = [];

      if ( listOrders.value.length > to ) {
        for ( let i = from; i < to; i++) {
          arr.push(listOrders.value[i]);
        }
      } else {
        for ( let i = from; i < listOrders.value.length; i++) {
          arr.push(listOrders.value[i]);
        }
      }
      
      updatePageDate(arr);
    };

    const showDetailingOrder = async (id) => {
      let detailOrderResponse = await getDetailingOrder(id);

      let { status, data } = detailOrderResponse;

      if (status === 200) {
        store.dispatch("setDetailOrder", data.order);
        console.log(data.order);
        updateDialog(true);
      } else {
        return false;
      }

    };

    const openFilter = (flag) => filter.value = flag;

    const updateDetailFilter = (flag) => detailFilter.value = flag;

    const runFilter = async () => {
      if ( !isFilterMore.value ) {
        let id = numberOrder.value;
        let detailOrderResponse = await getDetailingOrder(id);

        let { status, data } = detailOrderResponse;
        if (status === 200) {
          store.dispatch("setDetailOrder", data.order);

          let tmp = [data.order];
          let tmpListOrders = tmp.map((el) => {
            let quantity = el.items.reduce((a, b) => a + b.quantity, 0);
            let amount = el.items.reduce((a, b) => a + b.price, 0);
            return {...el, quantity, amount}
          });

          store.dispatch("setListOrders", tmpListOrders);

          updateCountOrders(listOrders.value.length);
          updateLengthPage(getLengthPage(countOrders.value));
          getPageData();
          updateDetailFilter(true);
          openFilter(false);
        } else {
          updateAlert(true);
          updateAlertTitle(detailOrderResponse.status);
          updateAlertText(detailOrderResponse.response.data);
        }
      } else {
        let params = {
          dateFrom: dateFrom.value,
          dateTo: dateTo.value,
          orderStatus: statusSelect.value.toString()
        }

        const getOrdersResponse = await getOrders(params);

        let { status, data } = getOrdersResponse;

        if (status === 200) {
          store.dispatch("setListOrders", data.orders);
          updateCountOrders(listOrders.value.length);
          updateLengthPage(getLengthPage(countOrders.value));
          getPageData();
          openFilter(false);
        } else {
          updateAlert(true);
          updateAlertTitle(ordersResponse.status);
          updateAlertText(ordersResponse.response.data);
          }
      }
    }
      
      

    const updateAlert = (flag) => alert.value = flag;
    const updateAlertTitle = (title) => alertTitle.value = title;
    const updateAlertText = (text) => alertText.value = text;

    onMounted( async () => {
      const getOrdersResponse = async () => {
        return await getOrders();
      };

      let ordersResponse = await getOrdersResponse();

      let { status, data } = ordersResponse;

      if (status === 200) {
        store.dispatch("setListOrders", data.orders);
        if ( isListOrders.value ) {
          updateCountOrders(listOrders.value.length);
          updateLengthPage(getLengthPage(countOrders.value));
          getPageData();
          updateLoad(false);
        }
        
      } else {
        updateAlert(true);
        updateAlertTitle(ordersResponse.code);
        updateAlertText(ordersResponse.message);
        updateLoad(false);
      }
      
    })

    return { 
      isLoad, 
      countOrders, 
      page, 
      lengthPage, 
      pageData, 
      showDetailingOrder, 
      dialog, 
      detailOrder, 
      openFilter, 
      filter,
      filterMore,
      runFilter,
      numberOrder,
      isDetailFilter,
      isFilterMore,
      statusList,
      statusSelect,
      dateFrom,
      dateTo,
      alertTitle,
      alertText,
      alert
     }
    
  },
}
</script>

<style scoped>
  .status_4 {
    color: #344C11
  }
  .status_6 {
    color: #778D45
  }
  .status_5 {
    color: #AA1803
  }

  #alert {
    width: 90%;
    min-height: 100px;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 9999;
    transform: translate(-50%, 10%);
  }

  #tableOrders th {
    background: rgb(238, 237, 237);
  }

  #tableOrders td {
    cursor: pointer;
  }

  #tableOrders tr:hover {
    background: rgba(217, 225, 233, 0.4);
  }
</style>