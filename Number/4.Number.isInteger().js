// Number.isInteger()用来判断一个数值是否为整数。
Number.isInteger(25); // true
Number.isInteger(25.1); // false

Number.isInteger(25.0); // true
// <|JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。
