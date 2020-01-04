import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import sideBar from './components/SideBar'
import topNav from './components/TopNav'
import hello from './components/HelloWorld'

Vue.config.productionTip = false
Vue.component('app-sideBar', sideBar);
Vue.component('app-topNav', topNav);
Vue.component('HelloWorld', hello);

new Vue({
  data() {
    return{
      foo: true
      }
  },
  methods: {
    baz: function(){
        //
        this.$root.foo = true
        console.log(this.$root.foo)
    }
  },
  vuetify,
  router,
  store,
  sideBar,
  topNav,
  render: h => h(App)
}).$mount('#app')
