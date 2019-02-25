<template>
  <div>
    <h1>Détails du film</h1>
    {{$route.params.id}}
    {{movies}}

        <!-- Edition de film  -->
   <!--  <p v-if="movie_to_edit">
      New movie
      <br>Title :
      <input type="text" v-model="movie_to_edit.title">
      <br>Year :
      <input type="text" v-model="movie_to_edit.year">
      <br>Synopsys :
      <textarea v-model="movie_to_edit.synopsys"></textarea>
      <br>
      <button v-on:click="save">Save</button>
    </p>-->
    <!-- Edition de film  -->
  </div>
</template>


<script>
import axios from "axios";

export default {

  props:{
    movies: Object
  },

   computed: {
    /* movie() {
      return this.$store.state.movie;
    } */
   },

  data() {
    return {}
  },

  components:{},
  
   created() {
    axios
      .get("http://localhost:3000/movies/${id}")
      .then(res => (this.movie_to_edit = res.data))
      .catch(err => console.log(err));
  },

  methods: {
    edit: function(movie) {
      this.movie_to_edit = movie;
    }
  }
}
</script>

