<script lang="ts" setup></script>

<template>
  <aside class="sidebar">
    <img
      class="sidebar__img"
      src="@/assets/images/ava.jpg"
      alt="ava"
      loading="lazy"
    />
    <div class="sidebar__body">
      <USkeleton class="skeleton_bottom" marginX="23" type="xl" />
      <div class="skeleton__list">
        <USkeleton type="sm" marginX="40" />
        <USkeleton type="sm" marginX="23" />
        <USkeleton type="sm" marginX="33" />
        <USkeleton type="sm" marginX="38" />
        <USkeleton type="sm" marginX="48" />
      </div>
      <USkeleton class="skeleton_top" type="sm" marginX="78" />
    </div>
  </aside>
</template>

<style lang="scss" scoped></style>
