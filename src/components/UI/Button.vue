<script lang="ts" setup>
interface IButton {
  color?: "red" | "white";
  view: "close" | "action";
}
const { color = "white", view = "action" } = defineProps<IButton>();
</script>

<template>
  <button v-if="view === 'action'" class="btn" :class="`btn_${color}`">
    <slot></slot>
  </button>
  <button v-else class="btn-close">&times</button>
</template>
