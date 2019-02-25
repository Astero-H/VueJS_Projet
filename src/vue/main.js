import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home.vue";
import MovieDetails from "./components/MovieDetails.vue";

const axios = require("axios");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/movie/:id",
    name: "details",
    component: MovieDetails
  }
  //{ path: '/movie/:id(\\d+)/edit', component: MovieEdit }
];

const router = new VueRouter({
  routes
});

class MoviesStore {
  constructor() {
    this.movies = [];
  }

  getMovies() {
    return axios
      .get("http://localhost:3000/movies")
      .then(res => (this.movies = res.data))
      .catch(err => console.log(err));
  }
}

let movies_store = new MoviesStore();

new Vue({
  el: "#app",
  data: function() {
    return {
      state: movies_store.state
    };
  },

  components: { Home, MovieDetails },
  router,
  render: h => h(App)
});
