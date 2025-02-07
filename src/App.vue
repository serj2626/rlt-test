<script lang="ts" setup>
import CellList from "./components/CellList.vue";
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";

import { onMounted } from "vue";
import { useProductStore } from "./stores/products";

const store = useProductStore();
const { loadProductsFromLocalStorage } = store;

onMounted(() => {
  loadProductsFromLocalStorage();
});
</script>

<template>
  <div class="app container">
    <Sidebar />
    <main>
      <CellList />
    </main>
    <Footer />
  </div>
</template>
