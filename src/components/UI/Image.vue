<script lang="ts" setup>
import { computed } from "vue";

interface IColor {
  color?: "green" | "blue" | "peru";
  size: "sm" | "xl";
}

const props = defineProps<IColor>();

const boxStyle = computed(() => {
  if (props.size === "sm") {
    return {
      width: "54px",
      height: "54px",
    };
  } else {
    return {
      width: "130px",
      height: "130px",
    };
  }
});

const imageSize = computed(() => {
  if (props.size === "sm") {
    return {
      width: "48px",
      height: "48px",
    };
  } else {
    return {
      width: "116px",
      height: "116px",
    };
  }
});
</script>

<template>
  <div
    class="image"
    :class="{
      image_position: size === 'sm',
      ['image_margin-auto']: size === 'xl',
    }"
    :style="boxStyle"
  >
    <div class="image__body">
      <div
        class="image__top"
        :style="imageSize"
        :class="{ [`image__top_${color}`]: color }"
      ></div>
      <div
        class="image__bot"
        :style="imageSize"
        :class="{ [`image__bot_${color}`]: color }"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image_position {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.image_margin-auto {
  margin-left: 45px;
}

.image__body {
  position: relative;
  width: 100%;
  height: 100%;
}

.image__top {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  backdrop-filter: blur(12px);
  box-shadow: -1px 1px 10px rgba(100, 97, 97, 0.336);
}

.image__bot {
  position: absolute;
  left: 0%;
  bottom: 0;
  background-color: #65f40b;
}

.image__bot_green {
  background-color: #7faa65;
}

.image__top_green {
  background-color: rgba(184, 217, 152, 0.035);
}

.image__bot_peru {
  background-color: #aa9765;
}

.image__top_peru {
  background-color: rgba(217, 187, 152, 0.035);
}

.image__bot_blue {
  background-color: #656caa;
}

.image__top_blue {
  background-color: rgba(116, 128, 237, 0.035);
}
</style>
