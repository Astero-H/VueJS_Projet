<template>
  <div>Edition de film
    <!-- Edition de film  -->
    <p v-if="movie_to_edit">
      New movie
      <br>Title :
      <input type="text" v-model="movie_to_edit.title">
      <br>Year :
      <input type="text" v-model="movie_to_edit.year">
      <br>
      <button v-on:click="save">Save</button>
    </p>
    <!-- Edition de film  -->


  {
  <movie-details v-bind:movie="movie"></movie-details>


  </div>
</template>


<script>
import MovieDetails from "./MovieDetails";

export default {
components: { MovieDetails },

data(){
  return{
    movie_to_edit: {}
  }
},

computed: {
},



};
</script>

