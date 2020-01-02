<template>
    <nav>
        <v-toolbar fat app>
            <v-btn flat color="grey"></v-btn>
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