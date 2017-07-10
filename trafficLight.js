/*
红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯按照这个规律不断交替重复亮灯？（用Promse实现）三个亮灯函数已经存在：
    function red(){
     console.log('red');
    }
    function green(){
     console.log('green');
    }
    function yellow(){
        console.log('yellow');
    }
*/
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

function time(fn, time) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            fn()
            resolve()
        }, time)
    })
}
!function play() {
    time(red, 3000).then(() => {
        time(green, 1000).then(() => {
            time(yellow, 2000).then(play)
        })
    })
}() 