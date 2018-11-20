// Boolean 运算符有三种：NOT、AND 和 OR：

// ToBoolean 操作：
// undefined、0、NaN、Null、'' 都等于false。

// 逻辑 NOT 运算，用（!）表示：
// 与逻辑 OR 和逻辑 AND 运算符不同的是，逻辑 NOT 运算符返回的一定是 Boolean 值。
let a={
    name:'lx_a'
};
console.log(typeof a); // Object
console.log(!a); // false
// <|如果运算数是对象，返回 false。

// 逻辑 AND 和运算，用（&）表示：
// 逻辑 AND 运算的运算数可以是任何类型的，不止是 Boolean 值。
// 逻辑 AND 运算并不一定返回 Boolean 值.
// AND 运算的运算行为：|>
// true true ===> true
// true false ===> false
// false true ===> false
// false false===> false
let b={
    name:'lx_b'
};
console.log(typeof b); // Object
console.log(a&&b); // 如果两个运算数都是对象，返回第二个对象。
console.log(b&&a); // 如果两个运算数都是对象，返回第二个对象。

function gl_f(x) {
    console.log('gl_f');
    console.log(x);
    console.log('------')
    return true
}
true && gl_f(); // 执行
false && gl_f(); // 不执行
gl_f(1)&&gl_f(2); // 都执行

// 逻辑 OR 或运算符，用（||）表示：
// 逻辑 OR 运算并不一定返回 Boolean 值。
// OR 运算符行为：
// true true ===> true
// true false ===> true
// false true ===> true
// false false ===> false
true || gl_f(3); // 不执行Fun
false || gl_f(4); // 执行第二个FUn
gl_f(1) || gl_f(2); // 第一个Fun执行