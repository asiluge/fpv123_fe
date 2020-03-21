import Vue from 'vue'
import Router from 'vue-router'

import Select from './components/SelectNS.vue'
import Create from './components/CreateNS.vue'
// export const constantRouterMap = [
//     // 追踪日志路由
//     {
//         path: '/',
//         component: Layout,
//         redirect: '/dashboard',
//         name: 'dashboard',
//         hidden: false,
//     }
// ];

const routes = [
    {
        path: '/home',
        component: Select
    },
    {
        path:'/create',
        component: Create
    }
];

const router = new VueRouter({
    routes:Router // (缩写) 相当于 routes: routes
});

Vue.use(router);

