import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import paths from './paths'
import SvgIcon from "vue3-icon";
import { createMetaManager, defaultConfig } from 'vue-meta'
import VueObserveVisibility from 'vue-observe-visibility'

const metaManager = createMetaManager(false, {
  ...defaultConfig,
  meta: { tag: 'meta', nameless: true },
});

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
  paths
});

let app = createApp(App);
app.use(router);
app.use(VueObserveVisibility);
app.use(metaManager);
app.component("svg-icon", SvgIcon);
app.mount('#app');
