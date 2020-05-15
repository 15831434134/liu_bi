import { fun1 ,arr} from './a'
import { b1 } from './b'
console.log(fun1, b1, arr)
import $ from 'jquery'
import arr1 from './c'
console.log(arr1,$)
//需要运行命令 babel js -d build/build.js  (包含commonjs语法)
//browserify build/app.js -o build/build.js
//以上两条命令逐一执行
fun1()
b1()
arr1.foo()