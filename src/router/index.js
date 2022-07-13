import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '.././components/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}]


const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_APP_BASEURL),
    mode: 'hash',
    routes,
})

export default router