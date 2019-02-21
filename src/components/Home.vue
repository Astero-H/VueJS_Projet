<template>
  <div class="container">
     <h1 class="display-4">Liste des films</h1>
    <hr>

    <!-- Affichage des films  -->
    <movie-list :movies="movies"> </movie-list>
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

    <button type="button" v-on:click="newmovie2" class="btn btn-primary">Ajouter</button>
    <!-- Ajouter un film  -->


    <!-- Recherche  -->
     <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          v-model="search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        >
      </form>
    </nav>
    <!-- Recherche  -->

    <!-- Edition de film  -->
    <p v-if="movie_to_edit">
      New movie
      <br>Title :
      <input type="text" v-model="movie_to_edit.title">
      <br>Year :
      <input type="text" v-model="movie_to_edit.year">
      <br>Synopsys :
      <textarea v-model="movie_to_edit.synopsys"></textarea>
      <br>
      <button v-on:click="save">Save</button>
    </p>
    <!-- Edition de film  -->

    

  </div>
</template>

<script>

import MovieList from './MovieList'
import MovieEdit from './MovieEdit'


export default {

  components:{MovieList,MovieEdit},
  
  data() {
    return {
      movie_to_edit: null,
      movie_to_add: {},
      search: "",
      movies: [
        {
          id:1,
          title: "Green Book",
          year: 2019,
          cover: "src/static/img/green-book.jpg"
        },
        {
          id:2,
          title: "Forrest Gump",
          year: 2014,
          cover: "src/static/img/forrest.jpg"
        },
        {
          id:3,
          title: "Un prophète",
          year: 2014,
          cover: "src/static/img/prophete.jpg"
        }
      ]
    };
  },

  methods: {
    newmovie1: function() {
      this.movies.push({ title: "New movie" });
    },
    newmovie2: function() {
      this.movies.push(this.movie_to_add);
      this.movie_to_add = {};
    },

    edit: function(movie) {
      this.movie_to_edit = movie;
    },
    save: function() {
      this.movie_to_edit = null;
    },
    remove: function(index) {
      this.movies.splice(index, 1);
    }
  },

  created: function() {
    console.log("Created");
  },

  computed: {
    firstletter: function() {
      return this.message[0];
    },
    movies_search: function() {
      return this.movies.filter(
        m => m.title.toLowerCase().indexOf(this.search.toLowerCase()) != -1
      );
    }
  }
};
</script>





<style>
.row-mt4{
  display: flex;
  flex-wrap: wrap;
  flex-direction: initial;
}
</style>
