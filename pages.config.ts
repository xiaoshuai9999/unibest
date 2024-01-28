import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'custom',
    appPlus: {
      titleNView: false
    }
  },
  easycom: {
    autoscan: true,
    custom: {
      '^fly-(.*)': '@/components/fly-$1/fly-$1.vue',
      '^uni-(.*)': '@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue'
    }
  },
  // 也可以定义 pages 字段，它具有最高的优先级。
  pages: [],
  /**
   * subPackages 扫描的目录，例如：src/pages-sub
   * @type SubPackage[] | undefined
   */
  subPackages: undefined
})
