<template>
  <div class="card" style="width: 15rem;">
    <img :src="movie.cover" class="rounded card-img-top" alt="Card image cap" height="320">
    <div class="card-body">
      <p class="card-text">Titre : {{movie.title}}</p>
      <p class="card-text">Année : {{movie.year}}</p>
    </div>

    <router-link
      :to="{name :'details', params:{id:movie.id}}"
      class="btn btn-info"
      tag="button"
    >Consulter</router-link>
    <!-- <button  @click="remove">Remove</button> -->
  </div>
</template>


<script>
import MovieEdit from "./MovieDetails";

export default {
  props: ["movie"],

  data() {
    return {
      movie_to_add: {}
    };
  },

  methods: {
/*     newmovie1: () => {
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
    remove: () => {
      this.movies.splice(index, 1);
    } */
  },

  components: {
    MovieEdit
  }
};
</script>

