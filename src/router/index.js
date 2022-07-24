import {createRouter, createWebHistory} from "vue-router";
import Home from '../views/HomeComponent.vue'
import Detail from '../views/DetailComponent.vue'


const routes = [
    { path: '/', component: Home },
    { path:'/detail', component: Detail, name: 'detail', props:true},
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

// const routes = [
//     {
//         path: '/',
//         name: 'Home',
//         component: Home
//     }
// ]

// const routers = new Router({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes
// })

// export default routers