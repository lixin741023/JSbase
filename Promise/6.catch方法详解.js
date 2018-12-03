// Promise.prototype.catch()
// Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。

function ajax1() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('staring...');
        },1000)
    })
}
ajax1().then((succ)=>{
    console.log(succ);
    let num=Math.random().toFixed(1);
    if(num>=0.5){
        return Promise.resolve(num);
    }else{
        return Promise.reject(num);
    }
}).then((succ)=>{
    console.log(succ);
    return Promise.reject('error'); // #1
}).catch((err)=>{
    console.log(err);
});

// ajax1 方法，返回了一个Promise实例，
// 当实例状态变为 resolved时，第一个 then方法 开始被调用，
// 第一个 then方法 中，有可能 resolved 也有可能 rejected，
// 如果为 resolved，第二个 then方法 会被调用，
// 如果为 rejected，catch方法会被调用。
// 另外，then方法指定的回调函数，如果运行中抛出错误，也可以被catch方法捕获。 #1
