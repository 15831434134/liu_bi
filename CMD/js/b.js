define(function (require, exports, module) {
    let msg = 'module2'
    function foo1() {
        return msg
    }

    module.exports = foo1
})