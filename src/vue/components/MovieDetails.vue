<template>
  <div>
    <br>
    <div class="row">
      <div class="col-md-4 offset-md-1">
        <img class="img-fluid" :src="movie.cover" alt="Responsive image" height="420">
      </div>

      <div class="col-md-5">
        <div class="card w-75">
          <div class="card-body">
            <h2 class="card-title">{{movie.title}} ({{movie.year}})</h2>
            <p> Genre: <i>{{movie.genre}} </i></p>

            <h4> Réalisateur </h4>
            <ul>
              <li> {{ movie.real.name }} </li>
              <li> Nationalité {{ movie.real.nationality }} </li>
              <li> Né le {{ movie.real.birth }} </li>          
            </ul>

            <router-link :to="{name :'edit'}" class="btn btn-info" tag="button">Modifier</router-link>

            <!-- <button class="btn btn-primary" @click="edit">Modifier</button> -->
            <button class="btn btn-danger" @click="deleteMovie()">Supprimer</button>
          </div>    
        </div>
      </div>
      <br>
      <div class="col-md-4 offset-md-1">
              <router-link :to="{name :'home'}" class="btn btn-info" tag="button">Page précédente</router-link>
      </div>

    </div>

    <!-- Edition de film  -->
    <!--     <p v-if="movie_to_edit">
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
export default {

  computed: {
    movie() {
      return this.$store.state.movie;
    }
  },

  created() {
    this.fetchMovie();
  },

  watch: {
    $route: "fetchMovie"
  },

  methods: {
    fetchMovie() {
      this.$store.dispatch("getMovie", this.$route.params.id);
    },

    deleteMovie() {
      if (confirm("Voulez-vous vraiment supprimer ce film ?")) {
         this.$store.dispatch("deleteMovie", this.movie.id).then(() => {
        this.$router.push({name: "home" });
      })
    }
  }
  }
};
</script>

