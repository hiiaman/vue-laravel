import Vue from 'vue'
import router from './route/route'
import App from './layouts/App'
import 'vue-material/dist/vue-material.css'

new Vue({
    el: '#root',
    router,
    template: '<App/>',
    components: { App },
});