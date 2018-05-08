import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login';
import SalaChat from './../components/SalaChat';
Vue.use(Router);

export default new Router( {
    routes : [
        {
            path: '/',
            component: login
        },
        {
            path: '/:id',
            component: SalaChat
        }
    ]
})