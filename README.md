## 云仓供应商平台
**_<font color=#F56C6C>请使用markdown软件或安装markdown相关插件阅读</font>_**
### ⚙️ 环境
```
Node 18+,仅推荐v18.19.0
```
v18.19.0：[https://nodejs.org/dist/latest-v18.x/node-v18.19.0-x64.msi](https://nodejs.org/dist/latest-v18.x/node-v18.19.0-x64.msi)<br>
备：[v18.19.0.zip](https://registry.npmmirror.com/-/binary/node/v18.19.0/node-v18.19.0-win-x64.zip) &nbsp;|
[v14.21.3.zip](https://registry.npmmirror.com/-/binary/node/latest-v14.x/node-v14.21.3-win-x64.zip)

### 🔨 安装
- `npm install`

### 📦 运行
- `npm run dev:h5`

### 🔗 发布
- `npm run build`，打包后的文件在 `dist/build/h5`，可以放到web服务器

## 其它
### 🏁Node环境
部分同事会开发多个项目，使用NodeJs版本不同。解决的方法比较多，可自行探索。<br>
这边推荐的是使用[volta](https://docs.volta.sh/guide/getting-started)，此项目版本号已被固定。
[下载](https://github.com/volta-cli/volta/releases/download/v1.1.1/volta-1.1.1-windows-x86_64.msi) &nbsp;|&nbsp;
[GitHub](https://github.com/volta-cli/volta) |
[掘金](https://juejin.cn/post/7251014326739042341)
<br><font color=red>🚨🚨安装前需要彻底卸载本地的Node,重启电脑后安装。</font>
<p style="height: 1px;background-color: #cccccc;"></p>
volta安装成功后：
<p>在终端(命令行)中输入 <span style="color:green;">volta install node@18.19.0</span> ，即安装Node 18.19.0版本。</p>
<p>在终端(命令行)中输入 <span style="color:green;">volta install node@14.21.3</span> ，可安装Node 14.21.3版本。</p>

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

#### 📌本项目由 uniapp + Vue3 + Ts + Vite4 + UnoCss + UniUI 驱动
#### 🌐 以下是可能用到的网站
- [unocss样式查询](https://unocss.dev/interactive/) <br>
- [uni-ui](https://uniapp.dcloud.net.cn/component/uniui/color.html)
- [pinia中文网](https://pinia.web3doc.top/introduction.html)
- [dayjs中文网](https://dayjs.fenxianglu.cn/category/)
- [vue3官网](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html)


#### 🎨 `v3` 代码段【使用vscode的宝宝😃使用】

在 `vue` 文件里面输入 `v3` 触发这个代码段。如下图，用户可以在`.vscode/vue3.code-snippets` 里面自行修改。
