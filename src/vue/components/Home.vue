<template>
  <div class="container">
    <hr>
    <h1 class="display-4">Liste des films</h1>
    <hr>
    <div class="row-mt4">
      <div class="col-lg-4 col-md-6 mb-4" v-for="(movie) in movies_search" v-bind:key="movie.title">
        <movie-item v-bind:movie="movie"></movie-item>
      </div>
    </div>
    Recherche : <input type="text" v-model="search" class="search" placeholder=" Titre | Genre | Année ">
    <br>

    <button
      class="btn btn-primary"
      type="button"
      data-toggle="collapse"
      data-target="#newMovie"
      aria-expanded="false"
      aria-controls="newMovie">
      Ajouter un film</button>
    <div class="row-mt4" id="modalAdd">
      <div class="col">
        <div class="collapse multi-collapse" id="newMovie">
          <div class="card card-body">
            <div class="card text-center">
              <div class="card-header"><h4>Nouveau film </h4></div>
              <div class="card-body">
                <h5 class="card-title">
                  Titre :
                  <input type="text" v-model="movie_to_add.title">
                </h5>
                <h5 class="card-title">
                  Année :
                  <input type="text" v-model="movie_to_add.year">
                </h5>
                 <form action="/profile" method="post" enctype="multipart/form-data">
                  <input type="file" name="avatar">
                </form>
                <button class="btn btn-primary" v-on:click="newmovie"> Ajouter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";

export default {
  data() {
    return {
      movie_to_add: {},
      search: ""
    };
  },

  components: { MovieItem },

  methods: {
    newmovie: function() {
      this.movies.push(this.movie_to_add);
      this.movie_to_add = {};
    }
  },

  computed: {
    movies() {
      return this.$store.state.movies;
    },

    movies_search() {
      return this.movies.filter(
        m =>
          m.title.toLowerCase().indexOf(this.search.toLowerCase()) != -1 ||
          m.genre.toLowerCase().indexOf(this.search.toLowerCase()) != -1 ||
          m.year.toString().indexOf(this.search.toLowerCase()) != -1
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

.search, #modalAdd{
  margin-bottom: 10px;
}
</style>
