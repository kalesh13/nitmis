import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: {}
    },
    mutations: {
        setToken: function (state, data) {
            state.token = data;
        }
    },
});
export default store;