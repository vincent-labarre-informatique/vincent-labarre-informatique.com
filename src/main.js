import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import SvgIcon from "vue3-icon";
import store from '@/store';
import { createMetaManager, defaultConfig } from 'vue-meta'
import VueObserveVisibility from 'vue-observe-visibility'

const metaManager = createMetaManager(false, {
  ...defaultConfig,
  meta: { tag: 'meta', nameless: true },
});

let app = createApp(App);
app.use(router);
app.use(store);
app.use(VueObserveVisibility);
app.use(metaManager);
app.component("svg-icon", SvgIcon);
app.mount('#app');
