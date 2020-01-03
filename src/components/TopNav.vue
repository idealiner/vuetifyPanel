<template>
    <div>
        <v-toolbar flat >
        <v-app-bar-nav-icon class="grey--text" @click="toggleDrawer()"></v-app-bar-nav-icon>
        <v-toolbar-title>Home</v-toolbar-title>   
        </v-toolbar>
    </div>
</template>


<script>
export default {
    methods: {
        toggleDrawer: function(){
            //this.$root.foo = !this.$root.foo
            this.$emit('toggledDrawer')
            //console.log('console called from topNav, root:', this.$root.foo)
        }
    }
}
</script>