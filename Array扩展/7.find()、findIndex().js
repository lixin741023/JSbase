// find() 方法：
// 用于找出第一个符合条件的数组成员。
// 它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。
// 如果没有符合条件的成员，则返回undefined。

let arr1=[
    {num:1},
    {num:2},
    {num:3},
    {num:4}
];
let end1=arr1.find((value,index,arr)=>{
    if(value.num===3)return true
});
console.log(end1); // { num:3 }

// findIndex方法的用法与find方法非常类似，
// 但返回第一个符合条件的数组成员的位置。
// 如果所有成员都不符合条件，则返回-1。

// 两个方法都支持第二个参数，
// 第二个参数用来绑定回调函数的this对象。
let arr2=[
    {num:11},
    {num:22},
    {num:33},
    {num:44}
];
let obj={
    year:20
};
let end2=arr2.findIndex(function (value, index, arr) {
    console.log(this);
    if(value.num>this.year)return true;
},obj);
console.log(end2); // 1