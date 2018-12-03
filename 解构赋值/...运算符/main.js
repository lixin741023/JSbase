// ...运算符有2种层面。
let arr=[1,2,3,4,5];
let obj={
    a:1,
    b:2,
    c:3
};
// 第一种：扩展运算符（spread operator），把东西分开，可以作用在Array和Object上。！扩展运算符（...）内部使用for...of循环
// 第二种：剩余运算符（rest operator）。

let arr1=[1,2];
arr1.push(...arr);
console.log(arr1); // [1,2,1,2,3,4,5]
// <|用在push中

let arr2=[...arr,11,22];
console.log(arr2); // [1,2,3,4,5,11,22]
// <|直接合并,(数组字面量 方式)

// Fun参数传递
// |>在形参中，表示传递给他的参数集合，类似于arguments，叫做不定参数。语法格式：...形参
function f1(par1,par2,par3,...par4) {
    console.log(par1,par2,par3,par4);
}
f1.apply(null,arr); // 1 2 3 [4,5]
// <|在以前，我们需要通过Function.property.apply方法来将一个数组展开整多个参数。
f1(...arr); // 1 2 3 [4,5]
// <|现在通过ES6的展开运算符，可以直接上述写法。
f1(1,2,3,4,5,6); // 1 2 3 [4,5,6]

function f2(...a) {
    console.log(a);
    console.log(...a);
}
f2(1,2,3,4);



