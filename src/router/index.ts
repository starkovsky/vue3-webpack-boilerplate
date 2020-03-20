import {createRouter, createWebHistory} from 'vue-router';
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/about',
        component: About,
        name: 'about'
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});
