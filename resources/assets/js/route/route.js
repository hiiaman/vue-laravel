import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import Hello from '../components/Hello'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueMaterial);

export default  new VueRouter({
    routes: [
        { path: '/', name:'hello', component: Hello },
    ]
});
