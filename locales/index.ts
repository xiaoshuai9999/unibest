import { createI18n } from 'vue-i18n'

import zhHans from './zh-Hans'
import zhHant from './zh-Hant'
import en from './en'

const messages = {
  'zh-Hans': zhHans,
  'zh-Hant': zhHant,
  en
}

const i18n = createI18n({
  legacy: false,
  locale: 'zh-Hans',
  messages
})

export default i18n
