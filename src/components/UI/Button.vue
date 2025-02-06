<script lang="ts" setup>
interface IButton {
  color: "red" | "white";
}
defineProps<IButton>();
</script>

<template>
  <button class="btn" :class="`btn_${color}`"><slot></slot></button>
</template>

<style lang="scss" scoped>
.btn {
  &_white {
    background-color: var(--color-white);
    color: var(--color-text-dark);
    font-size: 14px;
  }

  &_red {
    background-color: var(--color-red);
    color: var(--color-white);
    font-size: 14px;
  }
}
</style>
