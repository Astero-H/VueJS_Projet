import Vue from 'vue' 
import App from './App.vue' 
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home.vue'
import MovieList from './components/MovieList.vue'
import MovieEdit from './components/MovieEdit.vue'

Vue.use(VueRouter)
 
const routes = [
  {path: '/', component: Home},
  {path: '/edit/:id(\\d+)', component: MovieEdit}
]

const router = new VueRouter({
  routes
})


new Vue({
  el: '#app',
  components: {Home,MovieList,MovieEdit},
  router,
  render: h => h(App),
  data(){
    return {
      movies:'Hello!'
    }
  }
})