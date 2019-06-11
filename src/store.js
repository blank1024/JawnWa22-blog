import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        progressBar: {
            progress: 0,
            hidden: false
        }
    },
    mutations: {
        updateProgress(state, newProgress) {
            state.progressBar.progress = newProgress;
            state.progressBar.hidden = newProgress === 100 ? true : false;
        }
    },
    actions: {}
});
