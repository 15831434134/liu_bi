'use strict';

var _a = require('./a');

var _b = require('./b');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _c = require('./c');

var _c2 = _interopRequireDefault(_c);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_a.fun1, _b.b1, _a.arr);

console.log(_c2.default, _jquery2.default);
//需要运行命令 babel js -d build/build.js  (包含commonjs语法)
//browserify build/app.js -o build/build.js
//以上两条命令逐一执行
(0, _a.fun1)();
(0, _b.b1)();
_c2.default.foo();