<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useProductStore } from "../stores/products";
import { storeToRefs } from "pinia";

const { products } = storeToRefs(useProductStore());
const cells = ref([...Array(25).keys()].map((x) => x + 1));

function onDragStart(event: DragEvent, item: any) {
  console.log(event, item);
  // if (event.dataTransfer) {
  //   event.dataTransfer.dropEffect = "move";
  //   event.dataTransfer.effectAllowed = "move";
  //   event.dataTransfer.setData("itemId", JSON.stringify(item.id));
  // }
}

function onDrop(event: DragEvent, cellId: number) {
  console.log(event, cellId);
  // const itemId = parseInt(JSON.parse(event.dataTransfer.getData("itemId")));
  // items.value = items.value.map((i) => {
  //   if (i.id === itemId) {
  //     return { ...i, categoryId };
  //   }
  //   return i;
  // })
}
</script>

<template>
  <div class="cell-list">
    <div
      v-for="(cell, index) in cells"
      :key="index"
      class="cell-list__item"
      droppable="true"
      @dragover.prevent
      @dragenter.prevent
      @drop="onDrop($event, cell)"
    >
      {{ cell }}
      <div v-for="product in products" :key="product.id">
        {{ product }}
      </div>
    </div>
  </div>
</template>

<style>
.cell-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-radius: var(--border-radius-block);
  overflow: hidden;
}

.cell-list__item {
  width: 100%;
  height: 100px;
  border: var(--border);
  transition: var(--transition-base);

  &:hover {
    background-color: var(--color-border);
  }
}
</style>
