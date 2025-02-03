<script lang="ts" setup>
import { useProductStore } from "../stores/products";
import { storeToRefs } from "pinia";

const { products } = storeToRefs(useProductStore());
</script>

<template>
  <ul class="cell-list">
    <li class="cell-list__item" v-for="product in products" :key="product.id">
    
    </li>

  </ul>
</template>

<style lang="scss" scoped>
.cell-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 100px;
  border-radius: var(--border-radius-block);
  overflow: hidden;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.cell-list__item {
  border: var(--border);
  position: relative;
}

.cell__img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
