// 类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，如果单独把类的中的方法提取（解构）出来使用，很可能会报错。
class Person1 {
    constructor(name){
        this.name=name;
    }
    say(){
        console.log('saying...')
        console.log(this.name);
    }
}
let lx1=new Person1('lx1');
let {say}=lx1;
console.log(lx1.hasOwnProperty(say)); // false
// say() 报错： this找不到

// 解决|>
class Person2 {
    constructor(name){
        this.name=name;
        this.willSay=this.willSay.bind(this); // #1
    }
    willSay(){
        console.log('saying');
        console.log(this.name);
    }
}
let lx2=new Person2('lx2');
let {willSay}=lx2;
console.log(lx2.hasOwnProperty('willSay')) // true
willSay();
// #1：把类中的 willSay 方法赋给实例，并为其绑定住 this 为实例本身。