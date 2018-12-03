// Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。

// Generator 函数的2个形式上的特征：
// 1、function关键字与函数名之间有一个 * 号；
// 2、函数体内部采用 yield 表达式，定义不同的内部状态。

function* Ge() {
    yield 't1';
    yield 't2';
    return 'end';
}
let a=Ge();
console.log(a);
console.log(typeof a);
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
 // TODO: Generator 暂不扩充，需要更加的深入理解，以及实践案例。