import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import state from "./state";
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

export default createStore({

    // Plugin pour que le store persiste au refresh des pages
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],

    state,
    getters,
    mutations,
    actions
})