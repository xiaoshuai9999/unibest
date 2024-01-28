<template>
  <view
    :style="{ position: position, 'z-index': zIndex, '--opacity': maskOpacity }"
    class="container"
    :class="[mask ? 'mask' : '', maskMini ? 'mask-mini' : '', maskDark ? 'mask-dark' : '']"
    @click.prevent="handleClick"
  >
    <view>
      <view class="main">
        <loading4></loading4>
      </view>
    </view>
  </view>
</template>

<script>
import loading4 from './static/loading-triangle.vue'

export default {
  name: 'zero-loading',
  components: {
    loading4
  },
  props: {
    position: {
      type: String,
      default: 'fixed'
    },
    zIndex: {
      type: Number,
      default: 9
    },
    mask: {
      type: Boolean,
      default: false
    },
    maskOpacity: {
      type: Number,
      default: 0.1
    },
    maskMini: {
      type: Boolean,
      default: false
    },
    maskDark: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mask {
  z-index: 999 !important;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(255, 255, 255, var(--opacity));
  transform: translate(0, 0);
}

.mask-mini {
  height: 300rpx;
  width: 300rpx;
  border-radius: 20rpx;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mask-dark {
  background: rgba(7, 17, 27, var(--opacity));
}
</style>
