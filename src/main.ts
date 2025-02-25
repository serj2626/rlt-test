import "./assets/styles/main.scss";

import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import globalComponents from "@/components/UI/index";

const app = createApp(App);

app.use(createPinia()).use(globalComponents).mount("#app");
