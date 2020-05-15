(function () {
    requirejs.config({
        // baseUrl: 'js',//基本路径
        paths: {
            dataServer: './js/a',
            b: './js/b',
            //jquery内置AMD规范
            jquery: './lib/jq',
            //angular内置不支持
            angular:'./lib/ag'
        },
        //解决angular不支持方法
        shim: {
            angular: {
                exports:'angular'
            }
        }
    })
    requirejs(['b','angular'], function (b) {
        b.showMsg()
        console.log(angular)
    })
})()