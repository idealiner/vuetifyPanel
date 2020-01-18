import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import songs from './store/index'
import sideBar from './components/SideBar'
import topNav from './components/TopNav'
import Footer from './components/Footer'

Vue.config.productionTip = false
Vue.component('app-sideBar', sideBar);
Vue.component('app-topNav', topNav);
Vue.component('app-footer', Footer);

new Vue({
  store: songs,
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
  sideBar,
  topNav,
  Footer,
  render: h => h(App)
}).$mount('#app')