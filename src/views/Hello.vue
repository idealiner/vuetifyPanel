<template>
    <v-container class="my-5">
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="item in items" :key="item.title">
                <v-card  class="ma-3" max-width="344" router :to="item.route">
                    <v-img :src="item.img" height="200px"></v-img>

                    <v-card-title>
                    {{ item.title }}
                    </v-card-title>

                    <v-card-subtitle>
                    {{ item.author }}
                    </v-card-subtitle>

                    <v-card-actions>

                    <v-btn
                        color="purple"
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
    data(){
            return {
                show : false,
                items: [
                { title: 'Ala-ala', author: 'Minerva PH', des: 'desc', img: '\/assets\/img\/Aqua.gif', route: '/Readfile/index.php?sid=305_ec65173073c41bc60f6d2352ec14b8240491918c.mp3', show: false },
                { title: 'The Room', author: 'Melodramatic', des: 'desc1', img: 'avatars/melodramatic.jpg', route: '/Readfile/index.php?sid=305_ec65173073c41bc60f6d2352ec14b8240491918c.mp3', show: false },
                { title: 'Blindness', author: 'My Sister Deaf Sense', des: 'desc2', img: 'avatars/msds.jpg', route: '/Readfile/index.php?sid=305_ec65173073c41bc60f6d2352ec14b8240491918c.mp3', show: false },
                { title: 'Ala-ala', author: 'Minerva PH', des: 'desc', img: 'avatars/minerva_ph.jpg', route: '/', show: false },
                { title: 'The Room', author: 'Melodramatic', des: 'desc1', img: 'avatars/melodramatic.jpg', route: '/', show: false },
                { title: 'Blindness', author: 'My Sister Deaf Sense', des: 'desc2', img: 'avatars/msds.jpg', route: '/', show: false },
                { title: 'Good', author: 'One Yen', des: 'desc3', img: 'avatars/1Y.jpg', route: '/', show: false },
                
                ],
                //publicPath: process.env.BASE_URL
            }
        }
  }
</script>