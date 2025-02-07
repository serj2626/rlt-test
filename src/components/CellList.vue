<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useProductStore } from "../stores/products";
import { storeToRefs } from "pinia";
import CellDetail from "./CellDetail.vue";

const store = useProductStore();
const { products } = storeToRefs(store);
const { updateCellId } = store;
const cells = ref([...Array(25).keys()].map((x) => x + 1));

function onDrop(event: DragEvent, cellId: number) {
  if (event.dataTransfer) {
    const itemId = parseInt(JSON.parse(event.dataTransfer.getData("itemId")));
    updateCellId(itemId, cellId);
  }
}
</script>

<template>
  <section class="products">
    <div
      v-for="(cell, index) in cells"
      :key="index"
      class="cell"
      droppable="true"
      @dragover.prevent
      @dragenter.prevent
      @drop="onDrop($event, cell)"
    >
      <CellDetail :product="products.find((p) => p.cellId === cell)" />
    </div>
  </section>
</template>

<style>
.products {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-radius: var(--border-radius-block);
  overflow: hidden;
}

.cell {
  position: relative;
  width: 100%;
  height: 100px;
  border: var(--border);
}
</style>
