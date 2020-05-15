"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fun1 = fun1;
exports.fun2 = fun2;
//分别暴露
function fun1() {
    console.log(1111);
}

function fun2() {
    console.log(2222);
}

var arr = exports.arr = [11, 22, 33];