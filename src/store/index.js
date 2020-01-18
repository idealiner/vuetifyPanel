import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  data: {
   //
  },
  state: {
    items: [
       {
            "title": "Harry Potter and the Goblet of Fire",
            "author": "J. K. Rowling",
            "userid": 2000,
            "colour": "Indigo",
            "show": false
        }
      ]
  },
  actions: {
    allRecords: function(){
      console.log('allRecords called')
      axios
      .get('ajaxfile.php')
      .then(response=> {
        console.log(response)
        let items = response.data
        this.commit('SET_POSTS', response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  computed: {
    entries(){
        if (items) return items
        return []
      }
  },
  mutations: {
    SET_POSTS (state, items){
      state.items = items
    }
  }
})