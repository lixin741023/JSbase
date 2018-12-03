// Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
let s1=new Set([2,2,3,3,4,4]);
console.log(s1); // Set{2, 3, 4}
console.log(s1.size); // 3
console.log(s1.length); // undefined
console.log(...s1); // 2 3 4
console.log([...s1]); // [2, 3, 4]
console.log([...s1].size); // undefined
console.log([...s1].length); // 3

// const s2 = new Set(document.querySelectorAll('div'));
// console.log(s2.size)
// <|上述是Set函数接受了一个“类数组对象”作为参数，实际上，只要是具有 iterable 接口的数据结构就可以。

// 一个简单的数组去重办法
let arr=[3,3,4,5,6,6,7,5,10];
let newArr=[...new Set(arr)];
console.log(newArr); // [3, 4, 5, 6, 7, 10]

// Array.from方法可以将Set结构转化为数组
let s3=new Set([2,2,3,3]);
console.log(Array.from(s3)); // [2, 3]

function delDouble(arr) {
    return Array.from(new Set(arr));
}
