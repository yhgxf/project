import Vue from "vue";
import axios from "axios";

axios.defaults.baseUrl = "http://10.0.0.132.:8080/"
axios.defaults.timeout = 2000;


let query = {
    install: function(v) {
        v.prototype.$http = axios;
    }
}
Vue.use(query);

export default axios;