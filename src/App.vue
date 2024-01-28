<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
import { useAppStore } from '@/store'
import { useI18n } from 'vue-i18n'
import { getParam } from '@/utils'

const appStore = useAppStore()
const { locale } = useI18n()

onLaunch(() => {
  const { language, token } = appStore
  locale.value = language || 'zh-Hans'
  const local = location.href
  // #ifdef H5
  appStore.appUrl = location.origin
  if (token) {
    const appJumpUrl = getParam(local, 'appJumpUrl')
    if (appJumpUrl) {
      const arr = appJumpUrl.split('#')
      uni.reLaunch({
        url: `/${arr[0]}`
      })
    } else {
      uni.reLaunch({
        url: '/pages/index/index'
      })
    }
  } else {
    uni.reLaunch({
      url: '/pages/login/index'
    })
  }
  // #endif
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
