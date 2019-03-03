<template>
  <div>
    <hr>
    <h1 class="display-4">Détails du film</h1>
    <hr>
    <div class="row">
      <div class="col-md-4 offset-md-1">
        <img class="img-fluid" :src="movie.cover" alt="cover image" width="460" height="345">
      </div>

      <div class="col-md-5">
        <div class="card w-75">
          <div class="card-body">
            <h2 class="card-title">{{movie.title}} ({{movie.year}})</h2>
              <p>
                <b>Genre</b>:  {{movie.genre}} <br>
                <b>Langue</b>: {{movie.lang}} 
              </p>

            <h4>Réalisateur</h4>
            <ul>
              <li>{{ movie.real.name }}</li>
              <li>Nationalité {{ movie.real.nationality }}</li>
              <li>Né le {{ movie.real.birth }}</li>
            </ul>

            <router-link :to="{name :'edit'}" class="btn btn-info" tag="button">Modifier</router-link>
            <button class="btn btn-danger" @click="deleteMovie()">Supprimer</button>
          </div>
        </div>
      </div>
      <br>

      <div class="col-md-4 offset-md-1">
        <router-link :to="{name :'home'}" class="btn btn-info" tag="button">Page précédente</router-link>
      </div>

    </div>
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
    this.get_movie();
  },

  watch: {
    $route: "get_movie"
  },

  methods: {
    get_movie() {
      this.$store.dispatch("getMovie", this.$route.params.id);
    },

    deleteMovie() {
      if (confirm("Voulez-vous vraiment supprimer ce film ?")) {
        this.$store.dispatch("deleteMovie", this.movie.id).then(() => {
          this.$router.push({ name: "home" });
        });
      }
    }
  }
};
</script>

