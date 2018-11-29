// 与函数一样，类也可以使用表达式的形式定义。
// 这个类的名字是Person1而不是Person，Person 只在 Class 的内部代码可用，指代当前类。
const Person1=class Person {
    getClassName(){
        return Person.name;
    }
}
// 同时，也可以省略 Person
const Person2=class {
    getClassName(){
        return Person.name;
    }
}

// 利用 class 表达式，可以写出立即执行类：
const me=new class{
    constructor(name){
        this.name=name;
    }
    sayName() {
        console.log(this.name);
    }
}('LX');
me.sayName() // LX
