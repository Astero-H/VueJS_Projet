<template>
  <div class="card" style="width: 16rem;">
    <img :src="movie.cover" class="rounded card-img-top" alt="Card image cap" height="320">
    <div class="card-body">
      <p class="card-text"><b>Titre</b>: {{movie.title}}</p>
      <p class="card-text"><b>Genre</b>: {{movie.genre}}</p>
      <p class="card-text"><b>Année</b>: {{movie.year}}</p>
    </div>

    <router-link :to="{name :'details', params:{id:movie.id}}" class="btn btn-info" tag="button">Consulter</router-link>
  </div>
</template>


<script>
export default {
  props: ["movie"],
};
</script>

