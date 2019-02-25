<template>
  <div class="container">
    <h1 class="display-4">Liste des films</h1>
    <hr>
    {{state}}
    <!-- Affichage des films  -->
    <div class="row-mt4">
      <div class="col-lg-4 col-md-6 mb-4" v-for=" movie in movies" v-bind:key="movie.title">
        <movie-item v-bind:movie="movie"></movie-item>
      </div>
    </div>

    <!-- Affichage des films  -->
    <!-- Ajouter un film  -->
    <div class="form-group row">
      <label for="colFormLabel" class="col-sm-1 col-form-label">Titre</label>
      <div class="col-sm-2">
        <input type="text" v-model="movie_to_add.title" placeholder="titre">
      </div>
    </div>

    <div class="form-group row">
      <label for="colFormLabel" class="col-sm-1 col-form-label">Année</label>
      <div class="col-sm-2">
        <input type="text" v-model="movie_to_add.year" placeholder="année">
      </div>
    </div>

    <form action="/" method="post" enctype="multipart/form-data">
      <div class="form-group">
        <input type="file" v-on="movie_to_add.cover" name="avatar">
      </div>
      <button type="submit" class="btn btn-primary">Ajouter</button>
    </form>
    <!-- Ajouter un film  -->
    <!-- Recherche  -->
    <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          v-model="search"
          placeholder="Search"
          aria-label="Search"
        >
      </form>
    </nav>
    <!-- Recherche  -->
  </div>
</template>

<script>
import MovieItem from "./MovieItem";
import MovieDetails from "./MovieDetails";
import axios from "axios";

export default {
  name: "Home",

  components: {
    MovieItem,
    MovieDetails
  },

  data() {
    return {
      movie_to_add: {},
      search: "",
      movies: {}
    };
  },

  methods: {
    newmovie1: () => {
      this.movies.push({ title: "New movie" });
    },
    newmovie2: () => {
      this.movies.push(this.movie_to_add);
      this.movie_to_add = {};
    },

    edit: movie => {
      this.movie_to_edit = movie;
    },
    save: () => {
      this.movie_to_edit = null;
    },
    remove: index => {
      this.movies.splice(index, 1);
    }
  },

  created() {
    axios
      .get("http://localhost:3000/movies")
      .then(res => (this.movies = res.data))
      .catch(err => console.log(err));
  },

  computed: {
    firstletter: () => {
      return this.message[0];
    },
    movies_search: () => {
      return this.movies.filter(
        m => m.title.toLowerCase().indexOf(this.search.toLowerCase()) != -1
      );
    }
  }
};
</script>





<style>
.row-mt4 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: initial;
}
</style>
