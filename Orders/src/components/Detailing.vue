<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel
        title="Данные по заказу"
      >
        <v-expansion-panel-text>
          <v-list>
            <v-list-item title="ID" :subtitle="data.id"></v-list-item>
            <v-divider></v-divider>
            <v-list-item title="Номер в учетной системе" :subtitle="data.uid1c"></v-list-item>
            <v-divider></v-divider>
            <v-list-item title="Дата создания" :subtitle="data.created"></v-list-item>
            <v-divider></v-divider>
            <v-list-item title="Cтатус заказа" :subtitle="data.status.title"></v-list-item>
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
        title="Данные по клиенту"
      >
        <v-expansion-panel-text>
          <v-list>
            <v-list-item title="Имя" :subtitle="data.client.firstname"></v-list-item>
            <v-divider></v-divider>
            <v-list-item title="Фамилия" :subtitle="data.client.lastname"></v-list-item>
            <v-divider></v-divider>
            <v-list-item title="Телефон" :subtitle="data.client.phone"></v-list-item>
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
        title="Данные по магазину"
      >
      <v-expansion-panel-text>
      <v-list>
        <v-list-item title="ID" :subtitle="data.shop.id"></v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Точка выдачи" :subtitle="data.shop.title"></v-list-item>
      </v-list>
      </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
        title="Данные по способу оплаты"
      >
      <v-expansion-panel-text>
      <v-list>
        <v-list-item title="Способ оплаты" :subtitle="data.payment.method.title"></v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Статус оплаты" :subtitle="data.payment.status.title"></v-list-item>
      </v-list>
      </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
        title="Состав заказа"
      >
        <v-expansion-panel-text>
          <v-list
            v-for="d in data.items"
            :key="d.id"
          >
            <v-list-item title="Наименование товара" :subtitle="d.title"></v-list-item>
            <v-list-item title="Количество" :subtitle="d.quantity"></v-list-item>
            <v-list-item title="Цена" :subtitle="d.price"></v-list-item>
            <v-list-item title="Статус резервирования" :subtitle="d.status"></v-list-item>
            <v-divider></v-divider>
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object }
  },
  setup() {
    return {}  
  },
}
</script>