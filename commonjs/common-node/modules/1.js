//module.exports -= value 暴露一个对象，只能写一个module.exports
module.exports = {
    msg: 'module1',
    foo() { 
        console.log(this.msg)
    }
}