// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { userStore } from '@/store/user.js'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
    { path: '/', redirect: '/login' },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { title: '用户登录 - 跃播台' }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { title: '工作台 - 跃播台', requiresAuth: true }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { title: '数据复盘看板 - 跃播台', requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '跃播台 | Leap Stream Hub'
    if (to.meta.requiresAuth && !userStore.isLoggedIn) {
        next('/login')
    } else {
        next()
    }
})

export default router