<script lang="ts" setup>
import CellList from "./components/CellList.vue";
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="app container">
    <Sidebar />
    <main>
      <CellList />
      <UModal />
    </main>
    <Footer />
  </div>
</template>
