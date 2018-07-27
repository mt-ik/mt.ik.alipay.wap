import Vue from 'vue';
import Router from 'vue-router';
import Other from './views/other/other.vue';
import Index from './views/index/Index.vue';
import Advertising from './views/advertising/Advertising.vue';
import Home from './views/home/Home.vue';
import Wealth from './views/wealth/Wealth.vue';
import Reputation from './views//reputation/Reputation.vue';
import Friend from './views/friend/Friend.vue';
import Mine from './views/mine/Mine.vue';
import About from './views/about/About.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
        },
        {
          path: '/wealth',
          name: 'wealth',
          component: Wealth,
        },
        {
          path: '/reputation',
          name: 'reputation',
          component: Reputation,
        },
        {
          path: '/friend',
          name: 'friend',
          component: Friend,
        },
        {
          path: '/mine',
          name: 'mine',
          component: Mine,
        },
        {
          path: '/ad',
          name: 'ad',
          component: Advertising,
        },
        {
          path: '/about',
          name: 'about',
          component: About,
        },
      ],
    },
    {
      path: '*',
      name: '*',
      component: Other,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  },
});

// 全局守卫
// router.beforeEach((to, from, next) => {});

// 全局解析守卫
// router.beforeResolve((to, from, next) => {});

// 全局后置守卫
// router.afterEach((to, from) => {});

export default router;
