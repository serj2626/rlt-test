<script lang="ts" setup>
import { useProductStore } from "@/stores/products";
import { storeToRefs } from "pinia";
const store = useProductStore();
const { mode, modeTitle } = storeToRefs(store);
const { changeMode } = store;
</script>

<template>
  <label class="checkbox" for="checkbox">
    <input
      class="checkbox__inp"
      type="checkbox"
      id="checkbox"
      :checked="mode"
      @change="changeMode"
    />
    <span class="checkbox__inner">{{ modeTitle }}</span>
  </label>
</template>

<style lang="scss" scoped>
.checkbox {
  display: inline-block;
  position: absolute;
  top: 10px;
  left: 20px;
}

.checkbox__inp {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  appearance: none;
}

.checkbox__inner {
  display: inline-flex;
  position: relative;
  color: rgb(5, 188, 20);
  font-size: 18px;
  padding: 8px;
  padding-left: 74px;
  text-transform: uppercase;
}

.checkbox__inner:before {
  display: block;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  height: 36px;
  border-radius: 18px;
  background-color: white;
  transition: background-color 0.3s;
}

.checkbox__inner::after {
  display: block;
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: rgb(0, 201, 7);
  left: 3px;
  top: 3px;
  transition: background-color 0.3s, left 0.3s;
}

.checkbox__inp:checked + .checkbox__inner::before {
  background-color: rgb(0, 201, 7);
}

.checkbox__inp:checked + .checkbox__inner::after {
  background-color: white;
  left: 27px;
}

.checkbox__inp:focus + .checkbox__inner:before {
  outline: 1px solid gray;
  outline-offset: 3px;
}
</style>
