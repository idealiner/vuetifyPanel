<template>
  <v-sheet
    height="100%"
    class="overflow-hidden"
    style="position: relative;"
  >
    <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >

      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class=""
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
            <mdi-icon>{{ item.icon }}</mdi-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
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
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
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