import type { App } from "vue";
import Button from "./Button.vue";
import Image from "./Image.vue";
import Input from "./Input.vue";
import Modal from "./Modal.vue";
import Skeleton from "./Skeleton.vue";
import Toggle from "./Toggle.vue";

const components = [
  { name: "UButton", component: Button },
  { name: "UModal", component: Modal },
  { name: "UInput", component: Input },
  { name: "USkeleton", component: Skeleton },
  { name: "UImage", component: Image },
  { name: "UToggle", component: Toggle },
];

export default {
  install(app: App) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};
