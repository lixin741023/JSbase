class Person {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    say(){
        console.log('saying……')
    }
}

class Action extends Person {
    constructor(name, year, height){
        super(name, year);  // #1
        this.height = height;  // #2
    }
    do(){
        console.log('doing……')
    }
    FatherSay(){
        super.say() // #3
    }
}

let me = new Action('lx', 25, 190);
console.log(me);

// #1、#2 必须要先调用 super 之后，才可以是使用 this 关键字。
// <|因为 super之后，才确认 this 对象。

me.FatherSay(); // #3 这里需要注意：|>
// <|super 可以当做一个函数来使用，也可以当做一个对象来使用。
// 前面都是把 super 当做函数来使用的例子，而这里，是把 super 当做了1个对象。
// super作为对象时：
// --- 在普通方法中，指向父类的原型对象；
// --- 在静态方法中，指向父类。
// <|所以：
// 在 FatherSay 这个 普通的方法中，super 对象指向了 父类的原型对象（即 Person.prototype）
// 所以 super.say() === Person.prototype.say()
