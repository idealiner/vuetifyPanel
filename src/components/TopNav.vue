<template>
    <nav>
    <v-toolbar flat >
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="grey--text">
            Leerecs
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn >
            <span>Sign Out</span>
            <v-icon right>exit_to_app</v-icon>
        </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="secondary">
                  <v-list-item>
        <v-list-item-avatar>
          <v-img src="../assets/img/favicon.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="white--text">Joe Lee</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" router :to="item.route">
          <v-list-item-icon>
          <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        </v-navigation-drawer>
    </nav>
</template>


<script>
export default {
    methods: {
        toggleDrawer: function(){
            //this.$root.foo = !this.$root.foo
            this.$emit('toggledDrawer')
            //console.log('console called from topNav, root:', this.$root.foo)
            //this.drawer = !this.drawer
            }
        },
        data(){
            return {
                drawer : false,
                items: [
                { title: 'Hello', icon: 'dashboard', route: '/' },
                { title: 'Home', icon: 'mdi-access-point-network', route: '/home' },
                { title: 'About', icon: 'question_answer', route: '/about' }
                ]
            }
        }
}
</script>