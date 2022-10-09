import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { createI18n } from "vue-i18n";

import "./styles/main.sass";
import locale from "./assets/locale.json";

const i18n = createI18n({
  locale: "ru",
  fallbackLocale: "ru",
  messages: locale,
});
createApp(App).use(router).use(createPinia()).use(i18n).mount("#app");
