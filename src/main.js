import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import sideBar from './components/SideBar'

Vue.config.productionTip = false
Vue.component('app-sideBar', sideBar);

new Vue({
  vuetify,
  router,
  store,
  sideBar,
  render: h => h(App)
}).$mount('#app')
