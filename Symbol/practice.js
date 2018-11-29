// 实践Symbol
// 由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，这样就能保证不会出现同名的属性。
// 这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。

let sym=Symbol();
let obj1={
    name:'lx'
}
obj1[sym]='Hallo';
console.log(obj1); // { name:'lx', [Symbol()]:'Hello' }
// <|这里为什么不使用点运算符来操作？？即 obj1.sym='XXX' ？？
// <|因为点运算符后面接的，只能是一个字符串，sym会被当做一个字符串，而非一个Symbol值。

// 同样，在对象内部定义时，用到 Symbol 的地方也需要用方括号括起来。
let a=Symbol();
let b=Symbol('Fun');
let obj2={
    name:'lx',
    [a]: 'best!',
    [b](x){
        return x // #1
    }
}
console.log(obj2); // { name:'lx', [Symbol()]:'best!'}
console.log(obj2[b]('just one night~')); // #1：运用的简写叫做：采用增强的对象写法