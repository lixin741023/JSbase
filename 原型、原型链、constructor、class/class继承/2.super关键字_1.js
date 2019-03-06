// 子类的 constructor 方法中，必须指定 super() 关键字。

// super 即表示 父类 的 构造函数！用来新建父类的 this 对象！

class Person {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class Action extends Person {
    constructor(){
        super() // #1
    }
}

let me = new Action();
console.log(me);

// #1 必须要在子类的constructor中这么做，因为
// <|子类的 this 对象，必须通过 父类的构造函数完成塑造，再在其中加入自己的实例属性或方法，
// <|如果不调用super方法，子类中就得不到 this 对象。导致新建实例时报错。

// <|
// 机制：
// 先将 父类实例 对象的属性或方法，加到 this上（所以必须调用super），
// 然后再用子类的构造函数 加工 this。
