import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/index/Index.vue';
import Advertising from './views/advertising/Advertising.vue';
import Home from './views/home/Home.vue';
import About from './views/about/About.vue';
import Mine from './views/mine/Mine.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/ad',
      name: 'ad',
      component: Advertising,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
    },
  ],
});
