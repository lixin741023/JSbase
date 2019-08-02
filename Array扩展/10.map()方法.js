// Array.prototype.map()
// map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

let obj={
    num:5
};
let arr=[1,2,3];
let newArr=arr.map(function (value,index,arr) {
    return value+this.num;
},obj);
console.log(newArr);