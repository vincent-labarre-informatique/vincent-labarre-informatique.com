import Home from '@/views/Home/Home.vue';
import About from '@/views/About/About.vue';
import NotFound from '@/views/NotFound/NotFound.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes =  [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/404',
    name: 'not-found',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, SavedPosition) {
    if (to.hash) {
      const el = window.location.href.split('#')[1];
      if (el.length) {
        document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
      }
    } else if (SavedPosition) {
      return SavedPosition;
    } else {
      document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
  },
  routes
});

export default router;
