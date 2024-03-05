import Home_vue from '../components/pages/Home_vue.vue'
import About_vue from '../components/pages/About_vue.vue'
import Login_Section from '../components/pages/Login_Section.vue'  
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/modules/auth'
 
const routes = [
    {
        name: 'Home_vue',
        component: Home_vue,
        path: '/home',
        meta: { requiresLogin: true },
        props: true
    },
    {
        name: 'About_vue',
        component: About_vue,
        path: '/about',
        meta: { requiresLogin: true },
        props: true
    }, 
    {
        name: 'Login_Section',
        component: Login_Section,
        path: '/'
    } 
   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin) && store.state.isAuthenticated == false) {
        //store.commit("setGlobalError", "You need to log in before you can perform this action.")
        console.log('There is no token, redirect to login. (' + to.matched + ')');
        router.push('/');
    } else {
        next()
    }
})

export default router