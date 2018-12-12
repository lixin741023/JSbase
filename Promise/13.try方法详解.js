// Promise.try()

// 实际开发中，经常遇到一种情况：
// 不知道或者不想区分，函数fun是同步函数还是异步操作，但是想用 Promise 来处理它。
// 因为这样就可以不管 fun 是否包含异步操作，都用then方法指定下一步流程，用catch方法处理 fun 抛出的错误。
// 就像下面列子：
// Promise.resolve().then(fun);
// 那么问题来了，如果 fun 是一个同步函数，那么它会在本轮事件循环的末尾执行。
// |>

function f1() {
    console.log('f1')
}
function f2() {
    console.log('f2')
}
function f3() {
    console.log('f3')
}
function f4() {
    console.log('f4')
}
function f() {
    return new Promise((resolve,reject)=>{
        f1();
        f3();
        f2();
        resolve('I am resolve');
    })
}

function move() {
    f().then((succ)=>{
        console.log(succ);
        f4();
    });
    console.log('999');
}
move();

// fixme：该方法目前为止(2018-12-10)是一个提案  https://github.com/tc39/proposal-promise-try
