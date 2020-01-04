<template>
     <v-navigation-drawer
      v-model="drawer" 
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../assets/img/favicon.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Joe Lee</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        //drawer: String
    },
    data() {
        return{
            drawer: this.$root.foo,
        items: [
          { title: 'Home', icon: 'dashboard', link: '/home' },
          { title: 'About', icon: 'question_answer', link: '/about' },
        ],
        }
    },
    methods: {
        toggleDrawer: function(){
           this.drawer = !this.drawer
           //console.log('console called from sideBar, root:', this.$root.foo)
           //console.log('console called from sideBar, drawer:', this.drawer)
        }
    }
    
}
</script>