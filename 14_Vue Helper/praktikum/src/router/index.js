/* eslint-disable */
import vue from 'vue';
import VueRouter from 'vue-router';
import homePage from '@/views/homePage.vue';
import description from '@/views/thisDescription.vue';

vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'homePage',
        component: homePage,
    },
    {
        path: '/:id',
        name: 'thisDescription',
        component: description,
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    router,
});
export default router;