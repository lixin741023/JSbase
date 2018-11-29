// Symbol出现的原因：
// ES5对象的属性名都是字符串（string）的形式，这容易造成属性名重复，从而产生冲突。比如有人定义了Object.A，第二个人不知道的情况下又定义了一个Object.A。
// 如果有一种机制来保证每一个属性名都是独一无二的，这便是 ES6 引入 Symbol 的原因。

// ES6 引入了一种新的原始数据类型Symbol，用来表示独一无二的值。记住：是原始数据类型！
// 复习一下之前的6种原始类型的值：
// String Number Boolean undefined null Object

// Symbol 值通过Symbol函数生成。
let a=Symbol();
console.log(typeof a); // symbol
console.log(a); // Symbol()
// <|为什么不需要用 new？？
// <|因为生成的Symbol只是1个原始类型的值，不是对象，所以不能用new，Symbol是一种极类似于String的数据类型。