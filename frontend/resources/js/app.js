/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue.
 */

require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import helper from "./helper";

Vue.use(VueRouter);
Vue.use(helper);

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/login',
            name: 'login',
            component: () => import('./components/login/login')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./components/login/register')
        },
        {
            path: '/password/reset',
            name: 'reset',
            component: () => import('./components/login/resetRequest')
        },
        {
            path: '/password/reset/:token',
            name: 'resetForm',
            component: () => import('./components/login/newPassword')
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('./components/admin/index')
        },
    ]
});

router.afterEach(() => {
    if (app) {
        app.is_loading = false;
    }
});

const app = new Vue({
    el: '#app',
    router: router,
    data: {
        is_loading: true
    }
});