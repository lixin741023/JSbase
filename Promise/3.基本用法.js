// Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。

let go = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(12)
    },1000);
});

go.then((x)=>{
    console.log(x); // 12
},(err)=>{
    console.log(err);
});

// then方法接受两个回调函数作为参数：
// 第一个回调函数是Promise对象的状态变为resolved时调用。
// 第二个回调函数是Promise对象的状态变为rejected时调用。是可选的，不一定非要提供。
// 这两个函数都接受Promise对象传出的值作为参数。
