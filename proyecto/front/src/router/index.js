import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login';
import chatbox from '@/components/chatBox';
Vue.use(Router);

export default new Router( {
    routes : [
        {
            path: '/',
            component: login
        },
        {
            path: '/:id',
            component: chatbox
        }
    ]
})