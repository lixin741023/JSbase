// 有时候，我们可能需要重复使用某一个 Symbol 的值，使用 Symbol.for 方法可以用到。
// Symbol.for 接受1个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。
// 这里的参数是生成的Symbol值的名称，而不是之前所说的描述（2.describe.js），是key,而非description。

let a=Symbol.for('a');
let b=Symbol.for('a');
console.log(a===b); // true

let obj={};
obj[a]=function () { // #1
    console.log('a');
}
obj[b]=function () { // #2
    console.log('b');
}
obj[a](); // b
obj[b](); // b
// <|因为 变量a 和 变量b 都是同一个Symbol值，所以 #2 覆盖了 #1 的函数，所以上述都打印出了b。

// Symbol.for() 与 Symbol()的区别：
// 前者会被登记在全局环境中供搜索，而后者不会。
// Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
// 比如，如果调用Symbol.for("cat")30 次，每次都会返回同一个 Symbol 值，且只有一个。
// 但是调用Symbol("cat")30 次，则会返回 30 个不同的 Symbol 值，他们描述都相同，为cat。

// ！特性：
// ！通过 Symbol.for() 生成的Symbol值，会被登记到全局环境！
// <|因此：可以在不同的 iframe 或者 service worker 中通过 Symbol.keyFor 来获取到。