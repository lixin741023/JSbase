// Promise.prototype.then()
// 它的作用是为 Promise 实例添加状态改变时的回调函数。

// *then方法的返回值是一个新的 Promise实例（不是原来的那个了）。
// <|所以，可以采用链式的写法，即then方法后面再调用另外一个then方法。

function httpRequest(url) {
  return new Promise((resolve, reject) => {
    console.log('准备开始……');
    setTimeout(() => {
      url && resolve('地址合法，开始请求……');
      !url && reject('地址不合法，正在取消请求……');
    }, 800)
  })
}

let url = '';

httpRequest(url).then(
  suc => {
    console.log(suc);
    return new Promise(resolve => {
      setTimeout(() => {resolve('请求成功')}, 1000)
    })
  },
  err => {
    console.log(err);
    return new Promise((resolve, reject) => {
      setTimeout(() => {reject('取消成功')}, 3000)
    })
  }
).then(
  suc => {
    console.log(suc);
  },
  err => {
    console.log(err)
  }
);

