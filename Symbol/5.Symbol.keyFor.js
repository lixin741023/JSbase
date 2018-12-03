// Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key,也就是返回已登记的 Symbol 的值的名称。
let a=Symbol.for('a key');
let b=Symbol('just a description')
console.log(Symbol.keyFor(a)); // a key
console.log(Symbol.keyFor(b)); // undefined
// <|如果该Symbol没有登记，则返回undefined；