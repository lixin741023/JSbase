// 1、在某种程度上代替了函数的 apply 方法
let arr1=[1,2,3,4];
function f1(x1, x2, x3, x4) {
    console.log(x1);
    console.log(x2);
}
f1.apply(null,arr1);
// <|代替写法
f1(...arr1);

// 2、赋值数组

// 3、合并数组

// 4、与解构赋值结合
let [x1,...x2]=['foo'];
console.log(x1); // foo
console.log(x2); // []

// 5、把字符串转换为真正的数组
let str='lx';
console.log(...str); // l x
console.log([...str]); // ['l', 'x']

// 6.任何具有 Iterator 接口的对象（参阅 Iterator 一章），都可以用扩展运算符转为真正的数组。
let s1=new Set([1,2,3]);
console.log(s1); // Set{1, 2, 3}
console.log(
    [...s1] // [1, 2, 3]
);