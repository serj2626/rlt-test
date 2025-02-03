<script lang="ts" setup>
import CellList from "./components/CellList.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="app container">
    <Sidebar />
    <main class="main"><CellList /></main>
    <footer class="footer">
      <div class="footer__body">
        <USkeleton class="footer__skeleton" type="xl" />
      </div>
      <button class="footer__btn">
        <img
          width="12"
          height="12"
          class="footer__btn-icon"
          src="./assets/icons/close.svg"
          alt="footer__btn-icon"
          loading="lazy"
        />
      </button>
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
  position: relative;

  &__body {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline: 14px;
  }
}

.footer__btn {
  position: absolute;
  right: 14px;
  top: 14px;
}
</style>
