// 在JS中类的继承，通过 extends关键字 实现。

// 基本用法

class Person {
    constructor(){}
    say(){
        console.log('saying……')
    }
}

class Action extends Person{
    constructor(){
        super()
    }
    do(){
        console.log('doing……')
    }
}

let me = new Action();
console.log(me);
me.say();
me.do();
