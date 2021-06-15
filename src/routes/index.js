import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// NOT FOUND
const notFoundRoutes = [
  {
    path: '*',
    name: '404',
    meta: {
      requiresAuth: false,
    },
    components: {
      content: () => import('@/views/404.vue'),
    },
  },
];


let routes = [];
routes = routes.concat(notFoundRoutes); // must be last


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
