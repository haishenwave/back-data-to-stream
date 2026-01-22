// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
    { path: '/', redirect: '/login' },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { title: '用户登录 - 跃播台' } // 添加 meta 信息
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { title: '工作台 - 跃播台' }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { title: '数据复盘看板 - 跃播台' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 全局前置守卫：在路由跳转前修改页面标题
router.beforeEach((to, from, next) => {
    // 如果路由有 meta.title，就使用它；否则使用默认标题
    document.title = to.meta.title || '跃播台 | Leap Stream Hub';
    next();
});

export default router