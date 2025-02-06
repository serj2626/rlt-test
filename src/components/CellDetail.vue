<script lang="ts" setup>
import type { IProduct } from "@/stores/products";

defineProps<{
  product?: IProduct;
}>();
</script>

<template>
  <li class="cell">
    <div :class="{ [`cell_${product?.color}`]: product?.color }"></div>
    <div :class="{ [`cell_${product?.color}-top`]: product?.color }"></div>
  </li>
</template>

<style lang="scss" scoped>
.cell {
  border: var(--border);
  position: relative;
  height: 100px;
  border: var(--border);
}

.cell_green {
  position: absolute;
  top: 29px;
  left: 26px;
  width: 48px;
  height: 48px;
  background-color: #7faa65;
}

.cell_green-top {
  position: absolute;
  top: 23px;
  left: 32px;
  width: 48px;
  height: 48px;
  background-color: #B8D998;
}


.cell_peru {
  position: absolute;
  top: 29px;
  left: 26px;
  width: 48px;
  height: 48px;
  background-color: #AA9765;
}

.cell_peru-top {
  position: absolute;
  top: 23px;
  left: 32px;
  width: 48px;
  height: 48px;
  background-color: #d9bb98b9;
}

.cell_blue {
  position: absolute;
  top: 29px;
  left: 26px;
  width: 48px;
  height: 48px;
  background-color: #656CAA;
}

.cell_blue-top {
  position: absolute;
  top: 23px;
  left: 32px;
  width: 48px;
  height: 48px;
  background-color: #7481ED;
}
</style>
