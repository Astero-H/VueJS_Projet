<template>
  <div id="container">

      <div class="row-mt4">
      <div class="col-lg-4 col-md-6 mb-4" v-for="(movie,index) in movies"
         :key="movie.title"
         :movies="movies"
         v-on:edit="edit"
         v-on:remove="remove(index)">

        <div class="card" style="width: 15rem;">
          <img :src="movie.cover" class="rounded card-img-top " alt="Card image cap" height="320">
          <div class="card-body">
            <p class="card-text">Titre : {{movie.title}}</p>
            <p class="card-text">Année : {{movie.year}}</p>
          </div>
          <button type="button" class="btn btn-info" @click="edit(movie)">Consulter</button>
          <!-- <button  @click="remove">Remove</button> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>


import MovieEdit from "./MovieEdit"

export default {

  props:['movies'],

  data: function() {
    return {
      movie: this.props
    }
  },

  methods: {
      display: () => {
          console.log(this.props)
      }
  },

  components: { 
    MovieEdit
  }
}
</script>

