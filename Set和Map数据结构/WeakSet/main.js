// todo:WeakSet暂不考虑完善，原因在于感觉并不常用。
// WeakSet:   （弱的set结构）   （弱set结构）


// WeakSet 是一个构造函数，可以使用new命令，创建 WeakSet 数据结构。
// WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有1个区别。
// 1、WeakSet 的成员只能是对象，而不能是其他类型的值。

let ws1=new WeakSet();
console.log(ws1); // WeakSet{}
