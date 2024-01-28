// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'

import { presetUni } from '@uni-helper/unocss-preset-uni'

export default defineConfig({
  rules: [
    [/^lh-(\d+\.{0,1}\d{0,2})$/, ([, d]) => ({ 'line-height': `${(Number(d) / 4).toFixed(2)}rem` })],
    ['c-main', { color: '#2d71fb' }],
    ['c-blue', { color: '#2d71fb' }],
    ['c-green', { color: '#35c087' }],
    ['c-red', { color: '#E02F2D' }],
    ['white', { color: '#ffffff' }],
    ['c-3', { color: '#333333' }],
    ['c-6', { color: '#666666' }],
    ['c-9', { color: '#999999' }],
    ['bg-main', { 'background-color': '#2d71fb' }],
    ['bg-blue', { 'background-color': '#2d71fb' }],
    ['bg-green', { 'background-color': '#35c087' }],
    ['bg-red', { 'background-color': '#E02F2D' }],
    ['bg-3', { 'background-color': '#333333' }],
    ['bg-6', { 'background-color': '#666666' }],
    ['bg-9', { 'background-color': '#999999' }],
    ['bg-full-auto', { 'background-size': '100% auto' }]
  ],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'wh-screen': 'w-screen h-screen',
    'full-center': 'flex flex-row items-center justify-center',
    'full-col-center': 'flex flex-col items-center justify-center',
    'flex-center': 'flex items-center'
  },
  presets: [
    presetUni(),
    // 支持css class属性化，eg: `<button bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600" text="sm white">attributify Button</button>`
    presetAttributify(),
    // 支持图标，需要搭配图标库，eg: @iconify-json/carbon, 使用 `<button class="i-carbon-sun dark:i-carbon-moon" />`
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    // 支持css class组合，eg: `<div class="hover:(bg-gray-400 font-medium) font-(light mono)">测试 unocss</div>`
    transformerVariantGroup()
  ]
})
