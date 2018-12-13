// ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性。
// 一种数据结构，只要具有 SymBol.iterator属性，我们就认为它是“可遍历的”(iterable)。

// Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。
// 执行这个函数，就会返回一个遍历器。
// 至于属性名Symbol.iterator，它是一个表达式，它返回Symbol对象的iterator属性，这是一个预定义好的、类型为 Symbol 的特殊值，所以要放在方括号内。

let arr=[1,2,3,4,5]; // 一个数组，原生就具有 遍历器接口。
let ite=arr[Symbol.iterator](); // 生成了该数据结构的 遍历器对象。
console.log(ite.next()); // { value:1, done:false }
console.log(ite.next()); // { value:2, done:false }
console.log(ite.next()); // { value:3, done:false }
console.log(ite.next()); // { value:4, done:false }
console.log(ite.next()); // { value:5, done:false }
console.log(ite.next()); // { value:undefined, done:true }
console.log(ite.next()); // { value:undefined, done:true }
