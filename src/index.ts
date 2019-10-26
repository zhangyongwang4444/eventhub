class EventHub {
    cache = {}
    // {
    //  '楚天都市报':[fn1,fn2,fn3],
    //  '羊城晚报':[fn1,fn2,fn3]
    // }
    on(eventName, fn) {
        // 把 fn 推进 this.cache[eventName] 数组
        // eventName = 楚天，fn
        this.cache[eventName] = this.cache[eventName] || []
        this.cache[eventName].push(fn)
    }
    emit(eventName, data?) {
        // 把 this.cache[eventName] 数组里面的 fn 全部 依次调用
        (this.cache[eventName] || []).forEach(fn => fn(data));
    }
    off(eventName, fn) {
        // 把 fn 弹出 this.cache[eventName] 数组
        this.cache[eventName] = this.cache[eventName] || []
        let index = undefined
        for (let i = 0; i < this.cache[eventName].length; i++) {
            if (this.cache[eventName][i] === fn) {
                index = i
                break
            }
        }
        if (index === undefined) {
            return
        } else {
            this.cache[eventName].splice(index, 1)
        }
    }
}

export default EventHub

