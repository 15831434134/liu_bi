function k(n) {
    return n <= 2 ? 1 : k(n - 1) + k(n - 2)
}
console.log(this)

var onmessage = e => {
    console.log(`分线程接收${e.data}`)
    let res = k(e.data)
    postMessage(res)
    console.log(`分线程发送${res}`)
}