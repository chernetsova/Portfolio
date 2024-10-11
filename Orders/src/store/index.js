import { createStore } from 'vuex';

const store = createStore({
  state () {
    return {
      orders: [],
      detailOrder: null,
    }
  },
  getters: {
    getListOrders(state) {
      return state.orders;
    },
    getDetailOrder(state) {
      return state.detailOrder;
    },
  },
  mutations: {
    UpdateListOrders(state, list) {
      state.orders = list;
    },
    UpdateDetailOrder(state, payload) {
      state.detailOrder = payload
    }
  },
  actions: {
    setListOrders(context, data) {
      context.commit("UpdateListOrders", data);
    },
    setDetailOrder(context, data) {
      context.commit("UpdateDetailOrder", data);
    }
  }
});

export default store;