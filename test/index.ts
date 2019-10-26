import EventHub from "../src/index"

const eventHub = new EventHub()

console.assert(eventHub instanceof Object === true, "eventHub 是个对象")

// on emit 
let called = false
eventHub.on("xxx", (y) => {
    called = true
    console.log("called:" + called)
    console.log(y)
    console.assert(y === "今天天气晴转多云")
})

eventHub.emit("xxx", "今天天气晴转多云");



const eventHub2 = new EventHub()
let called2 = false
const fn1 = () => { called2 = true }
eventHub2.on("yyy", fn1)
eventHub2.off("yyy", fn1)
eventHub2.emit("yyy");
setTimeout(() => {
    console.log(called2)
}, 1000)

