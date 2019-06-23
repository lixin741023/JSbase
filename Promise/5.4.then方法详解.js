// ****这里很重要，可以合理解释then方法返回的是新的Promise实例，而这个新的Promise实例又是怎么改变自身状态的****//

// 先来确定几个特性：


// 1、当 end变量（promise对象） resolve(params) 的参数（params）也是1个 Promise对象 时，
// 那么这个 Promise对象 的状态会直接决定 end变量（promise对象）的状态。
// |>这里也就说：
// 变量p 如果最后调用的是 resolve,那么 变量end（promise对象）的状态会是 onFulfilled
// 变量p 如果最后调用的是 reject, 那么 变量end（promise对象）的状态会是 onRejected
let p = new Promise((resolve, reject) => {
  // resolve('p');
  // <|>
  reject('p');
});
let end = new Promise(resolve => {
  resolve(p)
}).then(
  data => {console.log(`我被${data}影响了,success`)},
  err => {console.log(`我被${err}影响了,failed`)},
);

// 2、如同 5.3 讲到的语法糖：
// Promise.resolve(42)
// 等价于
// new Promise(resolve => {
//   resolve(42)
// })

// *****
// 3、then方法中的2个函数（onfulfilled, onrejected）的返回值(xxx)，会被包装：
// 包装格式如下
// Promise.resolve(xxx)
// 这里的意思是说：
// 假如某1个then方法中的2个函数（onfulfilled onrejected）的返回值是 3：
// 那么就等于：
// Promise.resolve（3）


// 核心：
// Promise#then 不仅仅是注册一个回调函数那么简单，
// 它还会将回调函数的 返回值进行包装，创建并返回一个promise对象。

// 假设then方法里面的2个函数（onfulfilled，onrejected）的返回值是4
// 那么也就是说：then方法 内部默认有个这样的代码：

// return Promise.resolve(4)
// 等价于
// return new Promise(resolve => {resolve(4)})
// <|
// 这也就是为什么说 then方法 会返回1个 新的Promise 对象，并且能够把值传给下一个then方法之中了。
