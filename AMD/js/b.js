//定义有依赖的模块
define(['dataServer','jquery'], function (dataServer,$) {
    let av = 'bbbbb'
    function showMsg() {
        console.log(av, dataServer.getName())
        console.log($)
    }
    return {
        showMsg
    }
})