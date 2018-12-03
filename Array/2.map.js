// Array.prototype.map();
// map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

let arr=[11,22,33];
arr.map((x,y,z)=>{
    // console.log(x); 11 22 33
    // console.log(y); 0  1  2
    // console.log(z); [ 11, 22, 33 ]
});

let arrO=[
    {name:'lx1'},
    {name:'lx2'},
    {name:'lx3'},
];
let newArrO=arrO.map((x)=>x.name+'0');
console.log(newArrO); // [ 'lx10', 'lx20', 'lx30' ]