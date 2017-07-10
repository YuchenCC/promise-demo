/*
    实现一个LazyMan，可以按照以下方式调用:
        LazyMan(“Hank”)输出:
        Hi! This is Hank!
        LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
        Hi! This is Hank!
        //等待10秒..
        Wake up after 10
        Eat dinner~
        LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
        Hi This is Hank!
        Eat dinner~
        Eat supper~
        LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
        //等待5秒
        Wake up after 5
        Hi This is Hank!
        Eat supper
    以此类推
*/

var time = function (interval) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(`${interval}秒`)
        }, interval * 1000)
    })
}
var eatfood = function (food) {
    return new Promise((resolve, reject) => {
        resolve(`eat ${food}`)
    })
}
var LazyMan = function (name) {
    let promise = new Promise(function (resolve, reject) {
        resolve(`Hi This is ${name}`)
    })
    return {
        sleep: function (interval) {
            promise = promise.then(value => {
                console.log(value)
                return time(interval)
            })
            return this
        },
        eat: function (food) {
            promise = promise.then(value => {
                console.log(value)
                return eatfood(food)
            })
            return this
        },
        sleepFirst: function (interval) {
            temp = promise
            promise = time(interval).then(value => {
                console.log('先睡' + value)
                return temp
            })
            return this
        },
        print: function () {
            return promise.then(value => {
                console.log(value)
            })
            return this
        }
    }
}
LazyMan('Hank').sleepFirst(3).eat('lunch').sleep(5).eat('dinner').print()
/* print()是为了 console.log 最后一个动作 */