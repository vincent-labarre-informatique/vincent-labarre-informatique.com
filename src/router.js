import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes =  [
  {
    path: "/",
    name: "home",
    component: App
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, SavedPosition) {
    if (to.hash) {
      const el = window.location.href.split("#")[1];
      if (el.length) {
        document.getElementById(el).scrollIntoView({ behavior: "smooth" });
      }
    } else if (SavedPosition) {
      return SavedPosition;
    } else {
      document.getElementById("app").scrollIntoView({ behavior: "smooth" });
    }
  },
  routes
});

export default router;
