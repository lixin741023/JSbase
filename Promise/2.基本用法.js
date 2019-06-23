// 基本用法：
// ES6规定，Promise是一个构造函数，用来生成Promise实例。

let po = new Promise((resolve, reject)=>{

});
console.log(po); // Promise{ <pending> }
// Promise 构造函数接受1个函数作为参数，该函数又有2个参数。
// 1个resolve，1个reject。他们实质上是2个函数，不用自己部署，由JavaScript引擎提供。
// 调用 resolve函数 会把 Promise 状态从 pending--->fulfilled( resolved )。
// <|可以把 异步操作的结果 作为参数，传递出去。
// 调用 reject函数 会把 Promise 状态从 pending--->rejected
// <|可以把 异步操作的错误 作为参数，传递出去。

