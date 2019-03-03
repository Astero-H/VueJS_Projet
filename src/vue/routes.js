import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home.vue";
import MovieDetails from "./components/MovieDetails.vue";
import MovieEdit from "./components/MovieEdit.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/movie/:id(\\d+)",
        name: "details",
        component: MovieDetails
    },
    {
        path: "/movie/:id(\\d+)/edit",
        name: "edit",
        component: MovieEdit
    }
];

export default new VueRouter({
    routes
})
