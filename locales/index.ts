import { createI18n } from 'vue-i18n'

import zhCN from './zh-CN'
import zhTW from './zh-TW'
import enUS from './en-US'

const messages = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'en-US': enUS
}

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  messages
})

export default i18n
