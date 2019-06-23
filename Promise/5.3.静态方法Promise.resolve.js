// Promise的静态方法 resolve：
// Promise.resolve()
// <|
// 该方法可以认为是下面的语法糖：

// 写法1：
Promise.resolve(42);

// 写法2：
new Promise(resolve => {
  resolve(42)
});

// 上面写法1、2是等价的。

function f1() {
  return new Promise(resolve => {
    resolve(1)
  })
}
f1().then(data => {
  let num = Math.random().toFixed(1);
  if (num > 0.5) {
    return Promise.resolve(num)
  }
  if (num < 0.5) {
    return Promise.reject(num)
  }
}).then(
  (data) => {console.log('success', data)},
  (data) => {console.log('failed', data)}
);


