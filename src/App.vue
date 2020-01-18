<template>
  <v-app>
    <v-content>
      <app-topNav />
        <router-view/>
      <app-footer />  
    </v-content>
  </v-app>
</template>


<script>
import ProductListOne from './views/Hello';

import {mapState} from 'vuex'

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('allRecords')
  },
  computed: {
  ...mapState([
      'items'
    ])
  },
  props: {
  },
  components: {
    //
  },
  data() {
    return{
      
      }
  },
  methods: {
    changeDrawer: function(){
      //console.log('error')
      //this.$root.foo = !this.$root.foo
      //console.log('console called from AppVue, root:', this.$root.foo)
      this.$refs.sideBarRef.toggleDrawer()
    }
  }
};


</script>
