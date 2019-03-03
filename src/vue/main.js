import Vue from "vue";
import Vuex from "vuex";
import App from "./App";
import router from "./routes";

import MovieItem from "./components/MovieItem.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from 'axios';
Vue.prototype.$http = axios;

Vue.component('movie-item', MovieItem);
Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    movies: [],
    movie: null
  },

  mutations: {
    updateMovies(state, movies) {
      state.movies = movies; //.catch(err => console.log(err))
    },

    updateMovie(state, movie) {
      state.movie = movie; //.catch(err => console.log(err))
    },

    deleteMov(state, id) {
      var index = state.movies.findIndex(m => m.id == id);
      if (index != -1) {
        state.movies.splice(index, 1);
      }
    }
  },

  actions: {
    getMovies(context) {
      axios.get("/api/movies").then(function (response) {
        context.commit("updateMovies", response.data);
      });
    },

    getMovie(context, id) {
      axios.get(`/api/movie/${id}`).then(function (response) {
        context.commit("updateMovie", response.data);
      });
    },

    deleteMovie(context, id) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`/api/movie/delete/${id}`)
          .then(res => {
            if (res.status == 204) {
              context.commit("deleteMov", id);
              resolve();
            } else {
              reject();
            }
          })
          .catch(() => {
            reject();
          });
      });
    }
  }
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
  mounted() {
    this.$store.dispatch("getMovies");
    if (this.$route.params.id !== undefined) {
      this.$store.dispatch("getMovie", this.$route.params.id);
    }
  }
});
