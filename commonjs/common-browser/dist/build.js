(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const module1 = require('../common-node/modules/1')
const module2 = require('../common-node/modules/2')
const module3 = require('../common-node/modules/3')
//如果要运行在浏览器上，就需要转为浏览器识别的语言 
//运行命令 browserify app.js -o dist/build.js
module1.foo()
module2()
module3.three()
module3.four()
},{"../common-node/modules/1":2,"../common-node/modules/2":3,"../common-node/modules/3":4}],2:[function(require,module,exports){
//module.exports -= value 暴露一个对象，只能写一个module.exports
module.exports = {
    msg: 'module1',
    foo() { 
        console.log(this.msg)
    }
}
},{}],3:[function(require,module,exports){
//暴漏一个函数
module.exports = function () { 
    console.log('module2')
}
},{}],4:[function(require,module,exports){
// exports.xxx=value,能写多个exports.xxx=ccc
exports.three = function () { 
    console.log('module3')
}
exports.four = function () { 
    console.log('module3 four')
}
},{}]},{},[1]);
