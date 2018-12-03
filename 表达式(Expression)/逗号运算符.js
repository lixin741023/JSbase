// 逗号运算符是二元运算符,对它的每个操作数求值（从左到右），并返回最后一个操作数的值。

// |>逗号运算符可以用于赋值，在用于赋值时，逗号运算符总是返回表达式中的最后一项。
let a=(1,2,3,4,5);
console.log(a); // 5

// |>如同下面的代码，只有最后一个表达式被返回，其他的都只是被求值。
function myFunc () {
    var x = 0;

    return (x += 1, x); // the same of return ++x;
}
console.log(myFunc()); // 1
