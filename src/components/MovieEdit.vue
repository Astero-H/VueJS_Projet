<template>
  <div>
    <h1>Détails du film</h1>
    {{$route.params.id}}
    <movie-list :movies="movies" ></movie-list>
  </div>
</template>


<script>

import MovieList from './MovieList'

export default {

  components:{MovieList},

  props: ['movies'],

  methods: {
    edit: function(movie) {
      this.movie_to_edit = movie;
    }
  }
};
</script>

