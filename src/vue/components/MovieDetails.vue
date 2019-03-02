<template>
  <div>
    <br>
    <div class="row">
      <div class="col-md-4 offset-md-1">
        <img class="img-fluid" :src="movie.cover" alt="Responsive image" height="420">
      </div>

      <div class="col-md-7">
        <div class="card w-75">
          <div class="card-body">
            <h5 class="card-title">{{movie.title}}</h5>
            <p class="card-text">Année de production : {{movie.year}}</p>

            <router-link :to="{name :'edit'}" class="btn btn-info" tag="button">Modifier</router-link>

            <!-- <button class="btn btn-primary" @click="edit">Modifier</button> -->
            <button class="btn btn-info" @click="remove(movie)">Supprimer</button>
          </div>
          <div class="col-md-4 offset-md-4">
            <router-link :to="{name :'home'}" class="btn btn-info" tag="button">Page précédente</router-link>
          </div>
        </div>
      </div>
    </div>

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
export default {
  data() {
    return {
      movie_to_edit: null
    };
  },

  computed: {
    movie() {
      return this.$store.state.movie;
    },

    getMovie() {
      return this.$store.dispatch("getMovie", this.$route.params.id);
    },

    remove(movie) {
      return this.$store.dispatch("deleteMovie", this.$route.params.id);
    }
  },

  created() {
    this.getMovie;
  },

  watch: {
    $route: "getMovie"
  },

  methods: {
    edit(movie) {
      this.movie_to_edit = this.$store.state.movie;
    },

    save() {
      this.movie_to_edit = null;
      console.log(this.$store.state.movie);
    }
  }
};
</script>

