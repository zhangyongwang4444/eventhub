import EventHub from "../src/index"

const test1 = (message) => {
    const eventHub = new EventHub()
    console.assert(eventHub instanceof Object === true, "eventHub 是个对象")
    console.log(message)
}
const test2 = (message) => {
    const eventHub = new EventHub()
    let called = false
    eventHub.on("xxx", (y) => {
        called = true
        console.assert(y === "今天天气晴转多云")
    })
    eventHub.emit("xxx", "今天天气晴转多云");
    setTimeout(() => {
        console.assert(called === true)
        console.log(message)
    }, 1000)
}
const test3 = (message) => {
    const eventHub = new EventHub()
    let called = false
    const fn1 = () => { called = true }
    eventHub.on("yyy", fn1)
    eventHub.off("yyy", fn1)
    eventHub.emit("yyy");
    setTimeout(() => {
        console.assert(called === false)
        console.log(message)
    }, 1000)
}

test1('EventHub 可以创建对象')
test2('.on 了之后 .emit 会触发 .on的函数')
test3('.off 有用')



