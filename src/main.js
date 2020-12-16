import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "./plugins/element.js";

axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;

axios.interceptors.response.use(
    function(response) {
        console.log(response);
        let res = response.data;
        return Promise.reject(res);
    },
    error => {
        console.log(error);
        let res = error.response;
        return Promise.reject(res);
    }
);

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
