// 对象的解构：
let obj1={
    a1:'1',
    a2:'2'
};
let obj2={
    a:'1',
    b:'undefined',
    c:undefined,
    d:'2'
};

// 变量声明的解构：
let {a1,a2}=obj1;
console.log(a1,a2); // 1 2
// <|上述解构是一个简写，完整的形式应该是：let {a1:a1,a2:a2}=obj1;

// 变量已声明，再解构：
let b1,b2,b3;
({a:b1,b:b2='默认',c:b3='默认'}=obj2);
console.log(b1,b2,b3); // 1 'undefined' 默认
// <|为什么要加括号？
// 因为：如果没有括号，左边的{XXX}不是一个有效的独立语法，会被默认为是1个块，而不是对象字面量。
// 而(XXX)前面最好有一个分号，否则可能会被当做函数来执行。

// 对象解构中的Rest：收集尚未被解构模式拾取的剩余可枚举属性键。
let c1,c2,c3;
({a:c1,b:c2,...c3}=obj2);
console.log(c1,c2,c3); // 1 'undefined' {c:undefined,d:'2'}

let obj3={
    name:'lx',
    year:25
};
let {...d}=obj3;
console.log(d); // {name:'lx',year:25}
console.log(d==obj3); // false
// <|为什么是false？
// 因为解构的实质是提取（extract），提取出值，赋值给新的变量，所以他们的内存指针指向的不是同一个对象。