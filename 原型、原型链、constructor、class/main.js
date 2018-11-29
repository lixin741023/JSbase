// 要弄懂 javascript 中的原型和原型链，首先要知道，在 javascript 中一切皆为对象，但对象又区分为 普通对象 和 函数对象。
// 如何区分 函数对象 和 普通对象：
// 凡是通过 new Function() 创建的对象都是函数对象，其他的都是普通对象！
// 也就是说 console.log(XXX) 的结果是 function 那么它就一定是 函数对象 。

// 每个对象都有 __proto__ 属性，但只有函数对象才有 prototype 属性

// 关于对原型链的理解：详情见图（原型链.png）

// 总结：
// 1.查找属性，如果本身没有，则会去__proto__中查找，也就是构造函数的显式原型中查找，如果构造函数中也没有该属性，因为构造函数也是对象，也有__proto__，那么会去它的显式原型中查找，一直到null，如果没有则返回undefined
// 2.p.__proto__.constructor  == function Person(){}
// 3.p.___proto__.__proto__== Object.prototype
// 4.p.___proto__.__proto__.__proto__== Object.prototype.__proto__ == null          
// 5.通过__proto__形成原型链而非protrotype

function Person(x,y) {
    this.name=x;
    this.year=y;
    this.print='99';
}
Person.prototype.print='88';
let one1=new Person('lx', 25);
console.log(typeof one1); // object
console.log(one1.name); // lx
console.log(one1.print); // 99
console.log(Person.__proto__===Function.prototype);