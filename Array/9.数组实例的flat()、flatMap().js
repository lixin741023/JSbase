// Array.prototype.flat()
// 数组的成员可能还是一个数组，flat方法会把数组‘拉平’，返回新数组。
let arr1=[1,2,[3,4]];
console.log(
    arr1.flat() // [1, 2, 3, 4]
);

arr1.flat(Infinity);