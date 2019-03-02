import Vue from "vue";
import Vuex from 'vuex'
import App from "./App.vue";
import VueRouter from "vue-router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home.vue";
import MovieDetails from "./components/MovieDetails.vue";
import MovieEdit from "./components/MovieEdit.vue";

const axios = require("axios")
Vue.use(VueRouter); Vue.use(Vuex)
Vue.use(Vuex)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/movie/:id(\\d+)",
    name: "details",
    component: MovieDetails
  },
  {
    path: "/movie/:id(\\d+)/edit", 
    name: "edit",
    component: MovieEdit
  }
];

const router = new VueRouter({
  //mode : 'history',
  routes
});


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
    }
  },

  actions: {
    getMovies(context) {
      axios.get('/movies').then(function (response) {
       context.commit('updateMovies', response.data);
      })
    },

    getMovie(context,id) {
      axios.get(`/movies/${id}`).then(function (response) {
        context.commit('updateMovie', response.data);
      })
    },

    postMovie(context,id) {
      axios.post(`/movies/${id}`).then(function (response) {
        context.commit('updateMovie', response.data);
      })
    },
  }
})



new Vue({ 
  el: "#app",
  router,
  store,
  mounted() {
    this.$store.dispatch('getMovies')
    this.$store.dispatch('getMovie', parseInt(this.$route.params.id))
    this.$store.dispatch('postMovie', parseInt(this.$route.params.id))
  },
  render: h => h(App)
});



