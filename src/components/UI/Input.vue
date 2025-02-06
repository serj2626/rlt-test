<script lang="ts" setup></script>

<template>
  <input type="text" class="input" placeholder="Введите количество" />
</template>

<style lang="scss" scoped>
.input {
  &:placeholder {
    font-size: 14px;
    font-weight: 500;
    color: var(--color-white);
    padding-block: 11px 12px;
    padding-left: 12px;
    border: var(--border);
    border-radius: var(--border-radius-input);
  }
}
</style>
