// forEach() 是一个 Array 的方法，对数组的每个元素执行一次提供的函数。
// Array.prototype.forEach()
let arr=[11,22,33,{num:44},55];
arr.forEach((x,y,z)=>{
    console.log(x); // 元素的值 11 22 33 {num:44}
    console.log(y); // 下标     0  1  2  3
    console.log(z); // 数组本身
});
// 无法中途退出循环，break 命令和 return 都不生效。

let obj={
    name:'lx',
    year: 25
};
// Object 不具备forEach方法。
// obj.forEach is not a function。
