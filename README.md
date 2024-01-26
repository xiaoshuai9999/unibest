## 云仓供应商平台
**_<font color=#F56C6C>请使用markdown软件或安装markdown相关插件阅读</font>_**
### ⚙️ 环境
```
Node 18+,推荐v18.19.0
```
v18.19.0：[https://nodejs.org/dist/latest-v18.x/node-v18.19.0-x64.msi](https://nodejs.org/dist/latest-v18.x/node-v18.19.0-x64.msi)

### 🔨 安装
- `npm install`

### 📦 运行
- `npm run dev:h5`

### 🔗 发布
- `npm run build`，打包后的文件在 `dist/build/h5`，可以放到web服务器

## 其它
### 🏁Node环境
部分同事会开发多个项目，使用NodeJs版本不同。解决的方法比较多，可自行探索。<br>
这边推荐的是使用nvmd-desktop，已集成到项目中。 [下载](https://share.feijipan.com/s/3EUniujS) &nbsp;|&nbsp; [GitHub](https://github.com/1111mp/nvm-desktop)
<br><font color=red>安装前需要彻底卸载本地的Node,重启电脑后安装。</font>
<br>安装后下载需要的Node版本即可。安装后会自带<font color=green>nvmd</font>命令，可在软件界面上操作或使用命令操作切换Node版本。
<br>命令用法：🚨🚨在软件界面中下载多个Node(如 v14.21.3 和 v18.19.0)<br>
在命令行(终端)中进入到[package.json](./package.json)同级目录
<p>
为系统(全局)设置指定的版本：<font color=green>nvmd use v14.21.3</font><br>
为项目设置指定的版本：<font color=green>nvmd use v18.19.0</font> 【本项目无需使用，已指定。仅需安装v18.19.0版本Node即可】
</p>
<p style="height: 1px;background-color: #cccccc;"></p>
<span style="color: #DCBA36">Linux和Mac用户也可使用</span>
<a href="https://docs.volta.sh/guide/getting-started">volta</a>，此项目版本号也被固定(pin)好了。
<p>所以只需要在终端中输入 <span style="color:green;">volta install node@18.19.0</span> ，安装Node即可。</p>
<p style="height: 1px;background-color: #cccccc"></p>

### 🔧开发工具
- HBuilderX<font color=red>(必须)</font> [下载](https://www.dcloud.io/hbuilderx.html)
- Webstorm [下载](https://www.jetbrains.com.cn/webstorm/)
- Vscode [下载](https://code.visualstudio.com/)<br>
<font color=red>HBuilderX必须安装🔖。另外可选Webstorm或Vscode。<br>
开发时一般使用Webstorm或vscode写代码，使用HBuilderX预览和打包。直接使用HBuilderX也是可以的😃</font>
### 🐳开发工具插件
<font color=#F56C6C>HBuilderX</font>
<div style="margin-left: 40px;">
<p>内置浏览器</p>
<p>Git插件</p>
<p>CSS代码块</p>
<p>eslint-plugin-vue</p>
<p>uni-app（Vue3）编译</p>
<p>uni-helpers</p>
<p>uni_modules</p>
</div>
<font color=#F56C6C>Webstorm</font>
<div style="margin-left: 40px;">
<p>GitToolBox</p>
<p>.env files support</p>
<p>Uniapp Support</p>
</div>
<font color=#F56C6C>Vscode</font>
<div style="margin-left: 40px;">
<p>Vue Language Features (Volar)</p>
<p>TypeScript Vue Plugin (Volar)</p>
<p>uni-create-view</p>
<p>uni-app-schemas</p>
<p>uni-helper</p>
<p>SCSS IntelliSense</p>
<p>UnoCss</p>
<p>DotEnv</p>
</div>

- 本项目使用 uniapp + Vue3 + Ts + Vite4 + UnoCss + UniUI 驱动


#### ✨ 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [esbuild](https://github.com/evanw/esbuild)

- 📦 [组件自动化加载](./src/components)

- 📑 pinia+适用于多端的持久化方案

- 🎨 [UnoCSS](https://unocss.dev/) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [UnoCSS Icons](https://unocss.dev/presets/icons), [海量图标-https://icones.js.org/](https://icones.js.org/)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入

- 🦾 [TypeScript](https://www.typescriptlang.org/) & [ESLint](https://eslint.org/) & [stylelint](https://stylelint.io/) - 保证代码质量

- 🗂 ES6 import 顺序自动排序，css 属性自动排序，增强编码一致性

- 🌍 使用请求拦截器，封装请求

#### 🎨 `v3` 代码段【使用vscode的宝宝使用】

在 `vue` 文件里面输入 `v3` 触发这个代码段。如下图，用户可以在`.vscode/vue3.code-snippets` 里面自行修改。
