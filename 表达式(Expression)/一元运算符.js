// 一元运算符:
//   delete obj.property：delete运算符会删除某个对象用户定义的一个属性。
//   void(XXX)：void运算符对任何值都返回undefined，该运算符通常用于避免输出一个不必要的值。

// 前增量/前减量运算符：
// 在使用前缀式运算符时，注意增量和减量运算符都发生在计算表达式之前。考虑下面的例子：
let a=10;
--a;  // 9 等价于：a=a-1
console.log(a); // 9
console.log(--a); // 8
console.log(a); // 8

// 后增量/后减量运算符：
// 后缀式运算符是在计算过包含它们的表达式后才进行增量或减量运算的。(递增递减操作是包含在它们的 语句 被求值之后才执行的)考虑以下的例子：
let b=10;
b--; // 9 等价于：b=b-1
console.log(b);	//输出 "9"
console.log(b--);	//输出 "9"
console.log(b);	//输出 "8"

let c='1';
console.log(typeof c,c);
console.log(typeof +c, +c);
