import Vue from "vue";
import axios from "./axios/axios";
import app from "./app.vue";
import router from "../routes/router";
import store from "./store/store";

new Vue({
    el: ".container",
    render: function(createElement) {
        return createElement(app);
    },
    store: store,
    router: router,
    mounted: function() {

    }
})