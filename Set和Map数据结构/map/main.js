// javaScript 中的对象（Object），本质上是键值对的集合（Hash结构），但是却只能使用 字符串 来当做对象的 键（Key）。
// |>例如：
/***
    let obj={};
    let ele=document.getElementById('button');
    obj[ele]='123';
    obj['[object HTMLDivElement]']
***/
// <|上述代码本意是将一个DOM节点作为obj对象的 Key，但是由于对象只接受字符串作为键名，
// <|所以 ele 被自动转换成了[object HTMLDivElement] 这一字符串。

// 为了解决上述问题， ES6便提供了一种新的 数据结构： Map结构
// <|Map结构极类似对象，但是它的 Key值 可以是任何一种类型的值。
// 可以说是：
// Object 提供了：字符串 - 值 的对应。
// Map 提供了：值 - 值 的对应。 是一种更加完善的 Hash结构

let m=new Map();
console.log(m); // Map{}

let o={name:'lx'};
m.set(o,123);
console.log(m.get(o)); // 123

console.log(m); // Map{{name:'lx'}=>123}

// <|我们将一个对象 o 作为了，Map结构m 的一个键值。
