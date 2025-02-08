<script lang="ts" setup>
import type { IProduct } from "@/stores/products";

const props = defineProps<{
  product?: IProduct;
}>();

const emit = defineEmits<{
  (e: "dragProduct", item: IProduct): void;
  (e: "selectProduct", item: IProduct): void;
}>();

function dragOnstart(event: DragEvent, item: IProduct) {
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("itemId", JSON.stringify(item.id));
  }
}

console.log("cellidetail", props.product);
</script>

<template>
  <div
    v-if="product"
    @click="emit('selectProduct', product)"
    class="cell__draggable"
    draggable="true"
    @dragstart="dragOnstart($event, product)"
  >
    <span v-if="product?.count >= 0" class="cell__count cell__count_position">{{
      product?.count
    }}</span>
    <UImage
      v-if="product.count >= 0"
      :color="product.color"
      size="sm"
      class="cell__image"
    />
  </div>
</template>
