<script lang="ts" setup>
import type { IProduct } from "@/stores/products";

const props = defineProps<{
  product: IProduct;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "removeProduct", id: number): void;
}>();

console.log(props);
</script>

<template>
  <div class="modal">
    <div class="modal__body">
      <div class="modal__top">
        <UImage v-if="product.count" :color="product.color" size="xl" />
      </div>

      <div class="modal__main">
        <USkeleton type="2xl" class="modal__skeleton modal__skeleton_padding" />
        <div class="skeleton__list">
          <USkeleton type="sm" marginX="20" />
          <USkeleton type="sm" marginX="20" />
          <USkeleton type="sm" marginX="20" />
          <USkeleton type="sm" marginX="36" />
          <USkeleton type="sm" marginX="86" />
        </div>
      </div>

      <div class="modal__footer">
        <UButton
          @click="emit('removeProduct', product.id)"
          class="modal__btn"
          view="action"
          color="red"
        >
          Удалить предмет
        </UButton>
      </div>
      <UButton
        @click="emit('close')"
        view="close"
        class="modal__btn-close btn-close_position"
      />
    </div>
  </div>
</template>
