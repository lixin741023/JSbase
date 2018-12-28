// for...of 语句：
// 在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。
// 一个数据结构只要部署了Symbol.iterator属性，就被视为具有 iterator 接口，就可以用for...of循环遍历它的成员。
// 也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。

// 语法：for (variable of iterable) { XXX }
// variable：在每次迭代中，将不同属性的值分配给变量。
// iterable：被迭代枚举其属性的对象。

let arr=[11,22,33,44, {num:55}];
for(let i of arr){
    console.log(i); // 11 22 33 44 {num:55}
}

let str='justFun';
for(let i of str){
    console.log(i);
    if(i==='F'){
        break
    }
}
// 对于for...of的循环，可以由break, throw 或return终止。在这些情况下，迭代器关闭。

// ***for...of 语句遍历可迭代对象定义要迭代的数据。