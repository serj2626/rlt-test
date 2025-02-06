<script lang="ts" setup></script>

<template>
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
</template>

<style lang="scss" scoped>
.footer__body {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 14px;
}

.footer__btn {
  position: absolute;
  right: 14px;
  top: 14px;
}
</style>
