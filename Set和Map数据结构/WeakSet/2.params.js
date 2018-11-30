// WeakSet 可以接受一个数组或类似数组的对象作为参数。
// （实际上，任何具有 Iterable 接口的对象，都可以作为 WeakSet 的参数。）该数组的所有成员，都会自动成为 WeakSet 实例对象的成员。
let ws1=new WeakSet([[1,2],[2,3],[3,4]]);
console.log(ws1);
// WeakSet 未完待续，为何在node环境下打印不出东西，在浏览器环境下能打印出？
