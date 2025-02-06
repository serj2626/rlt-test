<script lang="ts" setup>
import { useProductStore } from "../stores/products";
import { storeToRefs } from "pinia";
import CellDetail from "./CellDetail.vue";

const { products } = storeToRefs(useProductStore());
</script>

<template>
  <ul class="cell-list">
    <CellDetail
      v-for="product in products"
      :key="product.id"
      :product="product"
    />

    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
  </ul>
</template>

<style lang="scss" >
.cell-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-radius: var(--border-radius-block);
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
