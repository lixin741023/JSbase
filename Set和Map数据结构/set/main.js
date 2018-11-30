// ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

// Set 本身是一个构造函数，用来生成 Set 数据结构。
let s=new Set();
console.log(s); // Set{}

[2,'2',3,3,4,4,5,5].forEach(x=>s.add(x));
console.log(s); // set{2, '2', 3, 4, 5}
// <|通过add方法向Set结构加入成员，结果表明Set结构不会添加重复的值


