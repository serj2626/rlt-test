<script lang="ts" setup>
import { useProductStore } from "@/stores/products";
import { storeToRefs } from "pinia";

const store = useProductStore();
const { zoom } = storeToRefs(store);
const { changeZoom } = store;
</script>

<template>
  <div class="zoom">
    <ul class="zoom__list">
      <li class="zoom__item">
        <button
          @click="changeZoom(zoom + 0.1)"
          title="Увеличить"
          class="zoom__btn"
        >
          +
        </button>
      </li>
      <li class="zoom__item">
        <button
          @click="changeZoom(zoom - 0.1)"
          title="Уменьшить"
          class="zoom__btn"
        >
          -
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.zoom {
  position: absolute;
  top: 20%;
  left: 30px;
}
.zoom__list {
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin: 0;
  padding: 0;
  list-style: none;
}

.zoom__btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: var(--color-red);
  color: var(--color-white);
  font-size: 28px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: var(--transition-base);

  &:hover {
    scale: 1.2;
    opacity: 0.8;
  }
}

.zoom__btn_active {
  background-color: #13df1d;
}
</style>
