// Promise.prototype.then()
// 它的作用是为 Promise 实例添加状态改变时的回调函数。

// *then方法的返回值是一个新的 Promise实例（不是原来的那个了）。
// <|因此，可以采用链式的写法，即then方法后面再调用另外一个then方法。

let po=new Promise((resolve,reject)=>{
   setTimeout(()=>{
       reject('occur a err')
   },1000);
});
po.then((succ)=>{

},(err)=>{
    console.log(err);
    return Promise.resolve(12);
}).then((succ)=>{
    console.log(succ);
    return Promise.reject('err again')
}).then((succ)=>{

},(err)=>{
    console.log(err);
});

