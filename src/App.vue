<script lang="ts" setup>
import Sidebar from "./components/Sidebar.vue";
import Skeleton from "./components/Skeleton.vue";
</script>

<template>
  <div class="app container">
    <Sidebar />
    <main class="main">main</main>
    <footer class="footer">
      <Skeleton />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: grid;
  grid-template-columns: 236px 1fr;
  grid-template-rows: auto 72px;
  gap: 24px;
  grid-template-areas:
    "sidebar main"
    "footer footer";
}

@mixin block {
  background-color: var(--color-dark-alt);
  border-radius: var(--border-radius-block);
  border: var(--border);
}

.main {
  grid-area: main;
  @include block;
}
.footer {
  grid-area: footer;
  @include block;
}
</style>
