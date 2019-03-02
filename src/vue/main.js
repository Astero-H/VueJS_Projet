import Vue from "vue";
import Vuex from 'vuex'
import App from "./App";
import routes from "./routes";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const axios = require("axios")
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: {},
    movie: null
  },

  mutations: {
    updateMovies(state, movies) {
      state.movies = movies          //.catch(err => console.log(err))
    },

    updateMovie(state, movie) {
      state.movie = movie        //.catch(err => console.log(err))
    },
  },

  actions: {
    getMovies(context) {
      axios.get('/api/movies').then(function (response) {
        context.commit('updateMovies', response.data);
      })
    },

    getMovie(context, id) {
      axios.get(`/api/movies/${id}`).then(function (response) {
        context.commit('updateMovie', response.data);
      })
    },

    deleteMovie(context, id) {
      axios.post(`/api/delete/${id}`).then(function (response) {
        context.commit('updateMovie', response.data);
      })
    },


  }
})


new Vue({
  el: "#app",
  router: routes,
  store,
  render: h => h(App),
  mounted() {
    this.$store.dispatch('getMovies')
    this.$store.dispatch('getMovie', parseInt(this.$route.params.id))
  }
});



