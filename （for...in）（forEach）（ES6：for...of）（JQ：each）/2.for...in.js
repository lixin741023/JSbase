// for...in 是一个语句，用于遍历一个对象的可枚举属性。
// 可枚举属性：是指那些内部 “可枚举” 标志设置为 true 的属性，对于通过直接的赋值和属性初始化的属性，该标识的默认值就是 true。

// 语法：for (variable in object) {...}
// variable：在每次迭代时，将不同的属性名分配给变量。
// object：被迭代枚举其属性的对象。

let arr=[33,44,55];
for(let i in arr){
    console.log(i); // 0 1 2
    console.log(typeof i); // string  解释：数组索引只是具有整数名称的枚举属性，与普通对象属性相同，并且是字符串string类型。
}
// 使用for...in语句，遍历一个数组的时候，以下需要注意：
// *不能保证for ... in将以任何特定的顺序返回索引。
// *for ... in循环语句将返回所有可枚举属性，包括非整数类型的名称和继承的那些
// *因为迭代的顺序是依赖于执行环境的，所以数组遍历不一定按次序访问元素。
// *所以：当迭代访问顺序很重要的数组时：
// *可以使用 Array.prototype.forEach() 或 for...of
// *for...in 的设计，主要是用来遍历对象的。

let obj={
    name:'lx',
    year:25,
    print:'yes'
};
for(let i in obj){
    console.log(i); // name year print
}

// ***for...in 语句以原始插入顺序迭代对象的可枚举属性。