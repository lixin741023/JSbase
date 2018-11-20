// 乘法运算符，用（*）表示，ECMAScript中的乘性运算符还具有一些自动转换功能。
// 在处理特殊值的时候，ECMAScript有一些特殊的行为：
// 如果结果太大或太小，那么生成的结果是 Infinity 或 -Infinity。
console.log(5*NaN); // 如果某个运算数是 NaN，结果为 NaN。
console.log(Infinity*0); // Infinity 乘以 0，结果为 NaN。
console.log(Infinity*-5); // Infinity 乘以 0 以外的任何数字，结果为 Infinity 或 -Infinity。
console.log(Infinity*-Infinity);// Infinity 乘以 Infinity，结果为 Infinity。

console.log('------');

// 除法运算符由斜杠（/）表示，用第二个运算数除第一个运算数：
// 在处理特殊值时，除法运算符也有一些特殊行为：
// 如果结果太大或太小，那么生成的结果是 Infinity 或 -Infinity。
console.log(NaN/Infinity); // NaN
console.log(0/NaN); // NaN
// <|如果某个运算数是 NaN，则结果一定为 NaN。
console.log(5/0); // Infinity
console.log(Infinity/0); // Infinity
// <|除了NaN，任何数除以0都等于Infinity。
console.log(0/5); // 0
console.log(0/Infinity); // 0
// <|除了NaN，0除以任何数都等于0。

console.log('------');

// 除法（余数）运算符由百分号（%）表示，使用方法如下：

// ！任何包含 NaN 的关系运算符都要返回 false
