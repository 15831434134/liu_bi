define(function(require){
    let module1 = require('./js/a')
    console.log(module1.foo())
    let module4 = require('./js/d.js')
    module4.fun10()
 })