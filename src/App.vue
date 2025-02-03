<script lang="ts" setup></script>

<template>
  <div class="app container">
    <aside class="sidebar">sidebar</aside>
    <main class="main">main</main>
    <footer class="footer">footer</footer>
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: grid;
  grid-template-columns: 236px 1fr;
  grid-template-rows: 1fr 72px;
  gap: 24px;
  grid-template-areas:
    "sidebar main"
    "footer footer";
}
.sidebar {
  grid-area: sidebar;
  background-color: lightgreen;
}
.main {
  grid-area: main;
  background-color: lightyellow;
}
.footer {
  grid-area: footer;
  background-color: lightskyblue;
}
</style>
