import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login';
import SalaChat from './../components/SalaChat';
import errorCompo from './../components/errorCompo';

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
        },
        {
            path: '/:id/notFound',
            component: errorCompo
        }
    ],
    mode: 'history'
})