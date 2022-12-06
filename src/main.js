import Vue from 'vue';
import App from './App.vue';
// import './assets/scss/my_colors.scss';
import 'bootstrap';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
