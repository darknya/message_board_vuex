import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#message_board_app');

router.beforeEach((to, from, next) => {
  // console.log('TO', to, from, next);
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/usercheck`;
    axios.get(api).then((response) => {
      console.log(response.data);
      if (response.data.islogin) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
