import Vue from 'vue';

import 'bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMagnifyingGlass, faLocationArrow, faUser, faPhone, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faTwitter, faTwitterSquare, faFacebookSquare, faLinkedin, faGooglePlusSquare, faPinterestSquare, faRedditSquare,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

library.add(
  faMagnifyingGlass,
  faTwitter,
  faTwitterSquare,
  faFacebookSquare,
  faLinkedin,
  faGooglePlusSquare,
  faPinterestSquare,
  faRedditSquare,
  faClock,
  faLocationArrow,
  faUser,
  faPhone,
  faEnvelope,
);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
