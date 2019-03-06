// 如果 父类 没有 显示 的定义 constructor方法，这个方法会被默认添加：
// 如果 子类 没有 显示 的定义 constructor方法，这个方法会被默认添加：并且自动含有 super

class Person {
    static say(){
        console.log('saying……')
    }
}

class Action extends Person{

}

let me = new Action();
console.log(me);


Action.say();
// <| 静态方法不可被其实例调用。
// <| 静态方法可以被继承。

