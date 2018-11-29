// JavaScript 语言中，生成实例对象的传统方法是通过构造函数。|>
function Point(x, y) {
    this.name=x;
    this.year=y;
}
let p=new Point('lx',25);
// <|上述写法相比较传统的面相对象语言，C++，java有很大不同，让人摸不着头脑。
// 因而引入了 class(类) 的概念。
// 其实 class 只是一个 语法糖 而已。
// 注意，类不存在变量提升，因为和继承有关，必须保证子类在父类之后定义。

let abc='active';
class Person {
    constructor (x ,y){ // constructor 方法是类的默认方法，每当通过 new 生成实例的时候，就会自动调用该方法，该方法默认返回实例对象。一个类必须有1个constructor方法，如果没有，JavaScript引擎会自动添加。
        this.name=x;
        this.year=y;
    }
    say() { // 类上的方法，实际上就是定义在该类的 prototype 上面的方法，等同于 Person.prototype.say=function XXXX……
        console.log(15);
    }
    [abc]() { // 类的属性名，可以使用表达式。
        console.log('do something');
    }
}
let lx=new Person('zz',22);
console.log(lx);
// <|this 关键字代表实例对象。
// 实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
// <|所以：|>
console.log(lx.hasOwnProperty('name')); // true
console.log(lx.hasOwnProperty('year')); // true
console.log(lx.hasOwnProperty('say')); // false
console.log(lx.hasOwnProperty('active')); // false
