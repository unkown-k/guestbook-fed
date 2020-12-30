import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "./plugins/element.js";

// var time = new Date().valueOf();
// var md = md5(Math.random() || 0);
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;
// axios.defaults.headers.common["uid"] = time + md;
axios.interceptors.response.use(function(response) {
    return new Promise(resolve => {
        resolve(response.data);
    }).catch(e => {
        console.log(e);
    });
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
