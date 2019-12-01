import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const stored_token = JSON.parse(window.localStorage.getItem("token"));

const store = new Vuex.Store({
    state: {
        token: stored_token || {},
    },
    getters: {
        isLoggedIn: function (state) {
            return state.token.token;
        },
        userName: function (state) {
            return state.token.user.name || "Guest";
        },
        thisYear: function () {
            return new Date().getFullYear();
        }
    },
    mutations: {
        setToken: function (state, data) {
            state.token = data;
            window.localStorage.setItem('token', JSON.stringify(data));
        }
    },
});
export default store;