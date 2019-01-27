<template>
  <li>
    <h2>{{movie.title}} ({{movie.year}})</h2>
    <span>{{movie.synopsys}}</span><br>
    <button @click="$emit('edit', movie)"> Edit </button>
    <button @click="$emit('remove')"> Remove </button>
  </li>
</template>



<script>
export default {
  props: {
    movie: {
      type: Object
    }
  }
}
</script>
