const module1 = require('../common-node/modules/1')
const module2 = require('../common-node/modules/2')
const module3 = require('../common-node/modules/3')
//如果要运行在浏览器上，就需要转为浏览器识别的语言 
//运行命令 browserify app.js -o dist/build.js
module1.foo()
module2()
module3.three()
module3.four()