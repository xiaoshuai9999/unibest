// 获取url中的参数
export function getParam(path: string, name: string) {
  const reg = new RegExp(`(^|\\?|&)${name}=([^&]*)(\\s|&|$)`, 'i')
  if (reg.test(path)) return unescape(RegExp.$2.replace(/\+/g, ' '))
  return ''
}
