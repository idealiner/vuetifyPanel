import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import sideBar from './components/SideBar'
import topNav from './components/TopNav'

Vue.config.productionTip = false
Vue.component('app-sideBar', sideBar);
Vue.component('app-topNav', topNav);

new Vue({
  data() {
    return{
      foo: true
      }
  },
  methods: {
    changeDrawer: function(){
        //
        this.$root.foo = !this.$root.foo
        console(this.$root.foo)
    }
  },
  vuetify,
  router,
  store,
  sideBar,
  topNav,
  render: h => h(App)
}).$mount('#app')
