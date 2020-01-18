<template>
    <v-container class="my-5">
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="item in items" :key="item.title">
                <v-card  class="ma-3" max-width="344" router :to="item.route" target="_blank">
                    <v-img :src="item.img" height="200px"></v-img>

                    <v-card-title>
                    {{ item.title }}
                    </v-card-title>

                    <v-card-subtitle>
                    {{ item.author }}
                    </v-card-subtitle>

                    <v-card-actions>

                    <v-btn
                        :color="item.color"
                        text
                    >
                        Play
                    </v-btn>

                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        @click="item.show = !item.show"
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                    <div v-show="item.show">
                        <v-divider></v-divider>

                        <v-card-text>
                        {{ item.des }}
                        </v-card-text>
                    </div>
                    </v-expand-transition>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    name: 'home',
    components: {
        //HelloWorld
    },
  computed: {
    items() {
      return this.$store.state.items;
    }
  }
}
</script>