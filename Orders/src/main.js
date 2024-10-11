import { createApp } from 'vue';
import Vuex from 'vuex';
import store from "./store/index.js";
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import App from './App.vue';

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(store);
app.use(vuetify).mount('#app');


