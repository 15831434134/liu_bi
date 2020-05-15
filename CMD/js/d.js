define(function (require,exports,module) { 
    let msg = 'module4'
    //同步引入
    let one = require('./b');
    console.log(one())
    //异步引入
    require.async('./c', function (c) { 
        console.log(c())
    })
    function fun10() {
        console.log(msg)
    }
    exports.fun10 = fun10;
})