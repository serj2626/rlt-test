<script lang="ts" setup>
import { computed } from "vue";

interface IPops {
  type: "sm" | "md" | "xl" | "2xl";
  marginX?: string;
}

const props = defineProps<IPops>();

const style = computed(() => {
  if (props.marginX) {
    return {
      marginInline: `${+props.marginX - 14}px`,
    };
  } else {
    return {
      marginInline: "0px",
    };
  }
});
</script>

<template>
  <div
    :style="style"
    class="skeleton"
    :class="{ [`skeleton_${type}`]: type }"
  ></div>
</template>
