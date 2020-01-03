<template>
  <v-app >
    <v-app-bar
      app
    >
      <app-topNav v-on:changeDrawer="changeDrawer()" />
    </v-app-bar>

    <v-content >
      <app-sideBar  />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
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
      console.log('error')
    }
  }
};


</script>
