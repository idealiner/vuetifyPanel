<template>
  <v-app >
    <v-app-bar
      app
    >
      <app-topNav v-on:toggledDrawer="changeDrawer()" />
    </v-app-bar>

    <v-content >
      <app-sideBar ref="sideBarRef" />
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
      this.$root.foo = !this.$root.foo
      console.log('console called from AppVue, root:', this.$root.foo)
      this.$refs.sideBarRef.toggleDrawer()
    }
  }
};


</script>
