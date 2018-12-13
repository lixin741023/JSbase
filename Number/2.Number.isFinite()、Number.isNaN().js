// Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。
Number.isFinite(-Infinity); // false

// Number.isNaN()用来检查一个值是否为NaN。
Number.isNaN(NaN); // true
Number.isNaN('15'); // false

// 与传统的全局方法 isFinite()，和 isNaN()的区别在于：
// 传统方法会先调用 Number() 把非数值类型转换为数值，然后进行判断。
// 而这2个新方法只能对 数值有效。

