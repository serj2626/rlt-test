<script setup lang="ts">
import { ref } from "vue";
import type { IProduct } from "../stores/products";
import { useProductStore } from "../stores/products";
import { storeToRefs } from "pinia";
import CellDetail from "./CellDetail.vue";

const showModal = ref(false);
const currentProduct = ref<IProduct | null>(null);

const store = useProductStore();
const { products } = storeToRefs(store);
const { updateCellId, saveProductsToLocalStorage } = store;
const cells = ref([...Array(25).keys()].map((x) => x + 1));

function selectProduct(item: IProduct) {
  currentProduct.value = item;
  showModal.value = true;
}

function onDrop(event: DragEvent, cellId: number) {
  if (event.dataTransfer) {
    const itemId = parseInt(JSON.parse(event.dataTransfer.getData("itemId")));
    updateCellId(itemId, cellId);
    saveProductsToLocalStorage();
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
      <CellDetail
        :product="products.find((p) => p.cellId === cell)"
        @select-product="selectProduct"
      />
    </div>
    <UModal @close="showModal = false" v-if="showModal" :product="currentProduct" />
  </section>
</template>
