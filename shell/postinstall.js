const fs = require('fs')

const path = './src/manifest.json'

if (fs.existsSync(path)) {
  // 文件存在
  console.log(`${path} 存在`)
} else {
  // 文件不存在，创建并写入一个空的JSON对象
  fs.writeFileSync(path, '{}')
  console.log(`文件 ${path} 已创建并写入空的JSON对象`)
}
