// 基本用法：

async function f() {
    return 'fun';
}

f().then(text => {
   console.log(text);
   return 11
}).then(text => {
    console.log(text);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(22)
        }, 2000)
    })
}).then(text => {
    console.log(text);
});

// 带有关键字 async 的函数，一定会返回1个 Promise 实例，
// 所以我们可以使用 then 来继续链式调用。
