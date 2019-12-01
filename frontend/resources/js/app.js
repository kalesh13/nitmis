/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue.
 */

require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import helper from "./helper";
import store from "./store";

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
            path: '/admin/register',
            name: 'adminRegister',
            component: () => import('./components/admin/register')
        },
        {
            path: '/register',
            name: 'userRegister',
            component: () => import('./components/user/register')
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
            path: '/dash',
            name: 'dashboard',
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
    store: store,
    data: {
        is_loading: true
    }
});