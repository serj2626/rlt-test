<script lang="ts" setup>
import type { IProduct } from "@/stores/products";
import { ref } from "vue";

defineProps<{
  product: IProduct;
}>();

const count = ref('');

const emit = defineEmits<{
  (e: "close"): void;
  (e: "removeProduct", id: number): void;
  (e: "editCount", item: { id: number; count: number }): void;
}>();

</script>

<template>
  <div class="modal">
    <div class="modal__body">
      <div class="modal__top">
        <UImage
          v-if="product.count >= 0"
          :color="product.color"
          size="xl"
          class="modal__image"
        />
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

      <div v-if="product.count === 0" class="modal__footer">
        <UButton
          @click="emit('removeProduct', product.id)"
          class="modal__btn"
          view="action"
          color="red"
        >
          Удалить предмет
        </UButton>
      </div>
      <div v-else class="modal__footer-actions">
        <UInput v-model:count="count" />
        <div class="modal__actions">
          <UButton
            @click="emit('close')"
            class="modal__actions-btn"
            view="action"
            color="white"
          >
            Отмена
          </UButton>
          <UButton
            @click="
              emit('editCount', {
                id: product.id,
                count: +count,
              })
            "
            class="modal__actions-btn"
            view="action"
            color="red"
          >
            Подтвердить
          </UButton>
        </div>
      </div>

      <UButton
        @click="emit('close')"
        view="close"
        class="modal__btn-close btn-close_position"
      />
    </div>
  </div>
</template>
