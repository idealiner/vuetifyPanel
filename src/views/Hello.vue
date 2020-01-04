<template>
    <v-container class="my-5">
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="item in items" :key="item.title" router :to="item.route">
                <v-card  class="ma-3" max-width="344" >
                    <v-img :src="item.img" height="200px"></v-img>

                    <v-card-title>
                    {{ item.title }}
                    </v-card-title>

                    <v-card-subtitle>
                    {{ item.author }}
                    </v-card-subtitle>

                    <v-card-actions>
                    <v-btn text>Share</v-btn>

                    <v-btn
                        color="purple"
                        text
                    >
                        Explore
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
                        {{ item.desc }}
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
    data(){
            return {
                show : false,
                items: [
                { title: 'Ala-ala', author: 'Minerva PH', desc: 'desc', img: 'avatars/minerva_ph.jpg', route: '/', show: false },
                { title: 'The Room', author: 'Melodramatic', desc: 'desc1', img: 'avatars/melodramatic.jpg', route: '/hello', show: false },
                { title: 'Blindness', author: 'My Sister Deaf Sense', desc: 'desc2', img: 'avatars/msds.jpg', route: '/about', show: false },
                { title: 'Ala-ala', author: 'Minerva PH', desc: 'desc', img: 'avatars/minerva_ph.jpg', route: '/', show: false },
                { title: 'The Room', author: 'Melodramatic', desc: 'desc1', img: 'avatars/melodramatic.jpg', route: '/hello', show: false },
                { title: 'Blindness', author: 'My Sister Deaf Sense', desc: 'desc2', img: 'avatars/msds.jpg', route: '/about', show: false },
                { title: 'Good', author: 'One Yen', desc: 'desc3', img: 'avatars/one_yen.jpg', route: '/hello', show: false }
                ],
                //publicPath: process.env.BASE_URL
            }
        }
  }
</script>