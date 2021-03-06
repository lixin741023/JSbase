// 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算。
// 将一个数组转为用 逗号 分隔的 参数序列。

let arr=[1,2,3];
console.log(...arr); // 1 2 3

// 该运算符主要用于函数调用。
let num=[1,2];
function f(x,y) {
    return x+y;
}
console.log(
    f(...num) // 3
);
// <|扩转运算符，将一个数组，转换为了一个 参数序列。

// 扩展运算符后面还可以放置表达式。
let arr1=[
    ...(1>0?[1,2,3]:[4,5,6])
];
console.log(arr1); // [1, 2, 3]

// 如果扩展运算符后面是一个空数组，则不产生任何效果。
console.log(
    [...[],1] // [1]
);