<script lang="ts" setup>
import type { IProduct } from "@/stores/products";

defineProps<{
  product?: IProduct;
}>();
</script>

<template>
  <div>
    <div :class="{ [`cell_${product?.color}`]: product?.color }"></div>
    <span v-if="product?.count" class="cell__count cell__count_position">{{
      product?.count
    }}</span>
    <div :class="{ [`cell_${product?.color}-top`]: product?.color }"></div>
  </div>
</template>

<style lang="scss" scoped>
.cell__count {
  display: inline-block;
  color: var(--color-white);
  opacity: 0.4;
  font-size: 10px;
  font-weight: 500;
  border: var(--border);
  border-top-left-radius: 8px;
  padding: 2px 4px;
}

.cell__count_position {
  position: absolute;
  bottom: 0;
  right: 0;
}

.cell_green {
  position: absolute;
  bottom: 23px;
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
  background-color: rgba(184, 217, 152, 0.035);
  backdrop-filter: blur(12px);
}

.cell_peru {
  position: absolute;
  bottom: 23px;
  left: 26px;
  width: 48px;
  height: 48px;
  background-color: #aa9765;
}

.cell_peru-top {
  position: absolute;
  top: 23px;
  left: 32px;
  width: 48px;
  height: 48px;
  background-color: rgba(217, 187, 152, 0.035);
  backdrop-filter: blur(12px);
}

.cell_blue {
  position: absolute;
  bottom: 23px;
  left: 26px;
  width: 48px;
  height: 48px;
  background-color: #656caa;
}

.cell_blue-top {
  position: absolute;
  top: 23px;
  left: 32px;
  width: 48px;
  height: 48px;
  background-color: rgba(116, 128, 237, 0.035);
  backdrop-filter: blur(12px);
}
</style>
