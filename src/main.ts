import Vue from 'vue';

// import 'vue-awesome/icons/flag';
// import 'vue-awesome/icons';
// import Icon from 'vue-awesome';
// Vue.component('icon', Icon);

import 'normalize.css';
import '@/styles/style.css';

import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
