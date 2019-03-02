<template>
  <div class="container">
    <h1 class="display-4">Liste des films</h1>
    <hr>
    <div class="row-mt4">
      <div class="col-lg-4 col-md-6 mb-4" v-for="(movie) in getMovies" v-bind:key="movie.title">
        <movie-item v-bind:movie="movie"></movie-item>
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";

export default {
  components: { MovieItem },
  methods: {},

  computed: {
    getMovies() {
      return this.$store.state.movies;
    },

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
