<template>
    <nav>
    <v-toolbar flat app>
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
            Leerecs
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat>
            <span>Sign Out</span>
            <v-icon right>exit_to_app</v-icon>
        </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="">
            <p>test</p>
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
                drawer : true
            }
    }
}
</script>