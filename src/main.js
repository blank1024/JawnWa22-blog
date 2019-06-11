import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import '@/api/index';
import util from "@/util/util.js";
import store from './store'


Vue.config.productionTip = false;
Vue.prototype.util = util; // 继承公用方法


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
