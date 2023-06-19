import { createPinia } from "pinia";

import { markRaw } from "vue";

import piniaPluginPersistedState from "pinia-plugin-persistedstate";

import router from "../router";

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

pinia.use(piniaPluginPersistedState);

export default pinia;
