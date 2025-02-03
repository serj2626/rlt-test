<script lang="ts" setup>
</script>

<template>
  <aside class="sidebar">
    <img
      class="sidebar__img"
      src="@/assets/images/ava.jpg"
      alt="ava"
      loading="lazy"
    />
    <div class="sidebar__body">
      <div class="skeleton skeleton_bottom"></div>
      <div class="skeleton__list">
        <div class="skeleton__item skeleton__item_width"></div>
        <div class="skeleton__item skeleton__item_width"></div>
        <div class="skeleton__item skeleton__item_width"></div>
        <div class="skeleton__item skeleton__item_width"></div>
        <div class="skeleton__item skeleton__item_width"></div>
      </div>
      <div class="skeleton skeleton_top"></div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@mixin block {
  background-color: var(--color-dark-alt);
  border-radius: var(--border-radius-block);
  border: var(--border);
}

.sidebar {
  grid-area: sidebar;
  @include block;
  padding: 18px 14px 24px;
}

.sidebar__img {
  border-radius: var(--border-radius-btn);
  backdrop-filter: blur(12px);
  margin: 0;
}

.sidebar__body {
  padding-top: 20px;
  height: 50px;
}

.skeleton__list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skeleton {
  $paddingX: 14px;
  margin-inline: 23px - $paddingX;
  height: 26px;
  background: linear-gradient(45deg, #3c3c3c 0%, #444444 51%, #333333 100%);
  border-radius: var(--border-radius-btn);

  &_bottom {
    margin-bottom: 24px;
  }
  &_top {
    margin-top: 24px;
  }
}

.skeleton__item {
  $paddingX: 14px;
  margin-inline: 23px - $paddingX;
  height: 10px;
  background: linear-gradient(45deg, #3c3c3c 0%, #444444 51%, #333333 100%);
  border-radius: var(--border-radius-btn);
}
</style>
