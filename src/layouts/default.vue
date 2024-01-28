<template>
  <view class="default-layout">
    <slot />
  </view>
</template>

<style lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  width: 100vw;
  // #ifdef MP-WEIXIN
  height: 100%;

  // #endif
  // #ifndef MP-WEIXIN
  min-height: 100%;

  // #endif
  overflow: hidden;
}
</style>
