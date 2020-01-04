<template>
  <v-app>


    <v-content>
       <app-topNav />
      <!--<app-sideBar ref="sideBarRef" /> -->
     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    
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
      //console.log('error')
      //this.$root.foo = !this.$root.foo
      //console.log('console called from AppVue, root:', this.$root.foo)
      this.$refs.sideBarRef.toggleDrawer()
    }
  }
};


</script>
