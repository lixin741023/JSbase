// 数组的解构：
let arr1=[0,1,2,'undefined',undefined];
let arr2=[0,1,2,3,4,5];
let arr3=[0,1,2,3,4,5,6,7,8,9];

// 变量声明并赋值时的解构
let [a1,a2,a3,a4]=arr1;
console.log(a1,a2,a3,a4); // 0 1 2 undefined

// 变量先声明后赋值时的解构
let b1,b2,b3,b4;
[b1,b2,b3,b4]=arr2;
console.log(b1,b2,b3,b4); // 0 1 2 3

// 解构可以设置默认值
let c1,c2,c3,c4,c5;
[c1='默认',c2='默认',c3='默认',c4='默认',c5='默认']=arr1;
console.log(c1,c2,c3,c4,c5); // 0 1 2 默认 默认
// <|默认值生效的条件是，该变量===undefined；所以c4的默认值不会生效，c4的值是'undefined'

// 用解构赋值可以直接进行变量的交换，而不需要一个中间临时变量；
let d=1,e=2;
[d,e]=[e,d];
console.log(d,e); // 2 1

// 数组解构时可以忽略一些不需要的值
let [f1,,f3]=arr3;
console.log(f1,f3); // 0 2
let [,g1,g2]=arr3;
console.log(g1,g2); // 1 2

// 将剩余数组赋值给一个变量，剩余运算符Rest
let h1,h2,h3,h4;
[h1,h2,h3,...h4]=arr3;
console.log(h1,h2,h3,h4); // 0 1 2 [3,4,5,6,7,8,9]
// 剩余元素必须是数组的最后一个元素，否则会报错。

// 拷贝数组：
let [...i]=arr3;
console.log(i); // [0,1,2,3,4,5,6,7,8,9]
console.log(i==arr3); // false