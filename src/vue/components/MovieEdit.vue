<template>
  <div>
    <hr>
    <h1> Modification des informations </h1>
    <hr>


    <div class="row">
      <div class="col-md-4 offset-md-1">
        <img class="img-fluid" :src="movie.cover" alt="cover image" width="460" height="345">
      </div>

      <div class="col-md-5">
        <form>


          <div class="form-group row">
            <label for="titre" class="col-sm-3 col-form-label">Titre</label>
            <div>
              <input v-model="movie.title" type="text" class="form-control" id="titre" placeholder="Titre">
            </div>
          </div>

          <div class="form-group row">
            <label for="genre" class="col-sm-3 col-form-label">Genre</label>
            <div>
              <input v-model="movie.genre" type="text" class="form-control" id="genre" placeholder="Genre">
            </div>
          </div>

          <div class="form-group row">
            <label for="langue" class="col-sm-3 col-form-label">Langue</label>
            <div>
              <input v-model="movie.lang" type="text" class="form-control" id="langue" placeholder="Langue">
            </div>
          </div>

          <div id="real-details">
            <hr>
          <h5>Réalisateur</h5>

          <div class="form-group row">
            <label for="real-name" class="col-sm-3 col-form-label">Nom</label>
            <div>
              <input v-model="movie.real.name" type="text" class="form-control" id="real-name" placeholder="Nom">
            </div>
          </div>


          <div class="form-group row">
            <label for="nationality" class="col-sm-3 col-form-label">Nationalité</label>
            <div>
              <input v-model="movie.real.nationality" type="text" class="form-control" id="nationality" placeholder="Nationalité">
            </div>
          </div>

          <div class="form-group row">
            <label for="birth" class="col-sm-3 col-form-label">Date de naissance</label>
            <div>
              <input v-model="movie.real.birth" type="text" class="form-control" id="birth" placeholder="jj/mm/aaaa">
            </div>
          </div>

          </div>

          <div>
            <button class="btn btn-info col-sm-3" @click="save()">Sauvegarder</button>
          </div>

        </form>
      </div>

      <div class="col-md-4 offset-md-1">
        <router-link :to="{name :'home'}" class="btn btn-info" tag="button">Page précédente</router-link>
      </div>

    </div>

  </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "",
                genre: "",
                lang: "",
                name: "",
                nationality: "",
                birth: ""
            };
        },

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
            save() {
                this.$store.dispatch("updateAMovie", {movie: this.movie});
            },

            get_movie() {
                this.$store.dispatch("getMovie", this.$route.params.id);
            }
        }
    };
</script>


<style>
  #real-details{
    margin-top:30px;
  }
</style>