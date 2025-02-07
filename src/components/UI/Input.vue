<script lang="ts" setup>
const count = defineModel('count')
</script>

<template>
  <input
    v-model="count"
    class="input"
    placeholder="Введите количество"
  />
</template>
