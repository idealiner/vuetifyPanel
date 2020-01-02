<template>
    <nav>
        <v-toolbar flat app>
        <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer">menu</v-toolbar-side-icon>
            
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="indigo">
            <p>test</p>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return{
            drawer: true
        }
    }
}
</script>>