// Promise 的一些特性：

// 1、调用resolve或reject并不会终结 Promise 的参数函数的执行。
new Promise((resolve,reject)=>{
   resolve(11);
   console.log('hello world');
}).then((succ)=>{
    console.log(succ)
},(error)=>{
    console.log(error)
});
// <|上述代码调用resolve(11)以后，后面的 console.log('hello world') 还是会执行，并且会首先打印出来。
// 因为：Promise 的 resolve 和 reject 是在本轮事件循环的末尾执行，总是会晚于本轮循环的其他同步任务。