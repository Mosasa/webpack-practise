// 文件引用, 按照文件引用的顺序打包文件
// 如果一个文件需要依赖另一文件的话，另一文件必须在该文件前引用，否则会无法找到依赖。
require('./style.less')
require('./style/index')
require('./style/normalize')

const format = require('utils/format')
const { log } = require('./utils')

log(format('hello world'))
document.querySelector('.superman').style.display = 'block'
log(_.map([1,2,3], (item) => item * 2))