// 一些默认调用Iterator的场景：
// <|即默认调用自己数据结构的 Symbol.iterator方法 的情况：

// 1、解构赋值：
// 比如：对数组和Set结构进行解构赋值的时候，会默认调用：
let set=new Set().add('a').add('b').add('c').add('d');
let [s1,s2]=set;
console.log(s1,s2); // a b
let [s3,...s4]=set;
console.log(s3,s4); // a ['b', 'c', 'd']

// 2、扩展运算符(...)
// 比如：
let str='hello';
console.log(...str); // h e l l o
console.log([...str]); // ['h', 'e', 'l', 'l', 'o']
let arr=[1,2];
console.log([0, ...arr, 3]); // [0, 1, 2, 3]

// 3、yield*
// todo：和 Generator 函数有关，有待深入了解 Generator之后，再完善该部分。

// 4、所有以数组作为参数的地方，其实都是调用了Symbol.iterator函数。