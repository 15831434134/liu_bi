//定义没有依赖的模块
define(function () {
    let msg = 'dataServer'
    function getName() {
        return msg
    }
    //暴露模块
    return { getName }
});