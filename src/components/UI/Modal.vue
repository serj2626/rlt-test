<script lang="ts" setup>
import type { IProduct } from "@/stores/products";

defineProps<{
  product: IProduct;
}>();
</script>

<template>
  <div class="modal">
    <div class="modal__body">
      <div class="modal__top">
        <img
          class="modal__img"
          src="@/assets/images/one.png"
          alt=""
          loading="lazy"
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

      <div class="modal__footer">
        <UButton class="modal__btn" view="action" color="red">Удалить предмет</UButton>
      </div>
      <UButton view="close" class="modal__btn-close btn-close_position" />
    </div>
  </div>
</template>