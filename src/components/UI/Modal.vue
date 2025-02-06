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
        <UButton class="modal__btn" color="red">Удалить предмет</UButton>
      </div>
      <UButton view="close" class="modal__btn-close btn-close_position" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: var(--color-dark-alt);
  border: var(--border);
  width: 250px;
  display: flex;
  flex-direction: column;
}
.modal__body {
  position: relative;
  padding-inline: 15px;
}
.modal__top {
  padding-top: 55px;
  padding-bottom: 30px;
  border-bottom: var(--border);
}
.modal__skeleton_padding {
  margin-bottom: 24px;
}
.modal__img {
  width: 130px;
  height: 130px;
  margin-inline: auto;
}

.modal__main {
  padding-top: 16px;
  padding-bottom: 24px;
}

.modal__footer {
  padding-block: 18px;
  border-top: var(--border);
}

.modal__btn {
  width: 100%;
  padding-block: 11px;
}
</style>
