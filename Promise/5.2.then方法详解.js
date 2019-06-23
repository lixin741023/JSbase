// *then方法将在当前脚本 所有同步任务 执行完才会执行，

let a = new Promise((resolve, reject) => {
  console.log(1);
  resolve();
});

a.then(() => {
  console.log('3');
});
console.log('end?');



// 打印的顺序是：
// 1 end? 3
