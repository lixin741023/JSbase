// Array.from方法用于将两类对象转为真正的数组：
// 1、类似数组的对象（array-like object）
// 2、可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）

let str='lx';
console.log(
    Array.from(str) // ['l', 'x']
);