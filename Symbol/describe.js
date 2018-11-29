// Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述。
// |>如果不传参数，在控制台打印出来则无法区分
let a=Symbol();
let b=Symbol();
console.log(a) // Symbol()
console.log(b) // Symbol()
// |>
let c=Symbol('c');
let d=Symbol('d');
console.log(c) // Symbol(c)
console.log(d) // Symbol(d)

// 参数只是对Symbol的描述而已，相同描述的Symbol返回的值依旧是不同的。
let e1=Symbol('e');
let e2=Symbol('e');
console.log(e1==e2); // false