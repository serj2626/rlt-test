<script lang="ts" setup>
interface IPops {
  type: "sm" | "md" | "xl";
  paddingX?: number;
}

defineProps<IPops>();
</script>

<template>
  <div class="skeleton" :class="{ [`skeleton_${type}`]: type }"></div>
</template>

<style lang="scss" scoped>
.skeleton {
  $paddingX: 14px;
  margin-inline: 23px - $paddingX;
  background: linear-gradient(45deg, #3c3c3c 0%, #444444 51%, #333333 100%);
  border-radius: var(--border-radius-btn);

  &_margin {
    margin-bottom: 24px;
  }

  &_sm {
    height: 10px;
  }

  &_md {
    height: 26px;
  }

  &_xl {
    height: 36px;
  }
}
</style>
