/**
 * store of vuex
 */

import Vue from 'vue';
import Vuex from 'vuex';
import Mine from './modules/mine';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Mine,
    },
});

