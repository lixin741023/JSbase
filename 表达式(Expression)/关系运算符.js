// 关系运算符执行的是比较运算。每个关系运算符都返回一个布尔值。

let a='5'>10;
console.log(a); // false
// <|隐式转换：'5' ===> 5

// 条件运算符：variable = boolean_expression ? true_value : false_value;
let b=5>3?111:222;
console.log(b); // 111

// 逗号运算符
// 用逗号运算符可以在一条语句中执行多个运算。
let c=1,d=2,e=3;

2>22?console.log(1):console.log(2);