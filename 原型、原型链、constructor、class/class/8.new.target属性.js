// new 是 构造函数 生成 实例对象 的命令。
// ES6 为new命令新增了一个 target 属性：new.target
// 该属性一般用在构造函数当中，返回 new 命令作用的那个构造函数。
// 如果构造函数不是通过 new 命令调用的，new.target 会返回 undefined。


// 子类继承父类的时候，
// new.target 返回的是子类。


// 根据上述特点，可以写出不能够独立使用，必须继承或被继承后才能使用的类。

class Person {
    constructor(){
        console.log('ing');
        console.log(new.target)
    }
}
class Person_child extends Person {
    constructor(){
        console.log('-------------');
        super();
        console.log(new.target)
    }
}
let father=new Person();
let child=new Person_child();
// todo: ending