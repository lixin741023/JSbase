// 类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，如果单独把类的中的方法提取（解构）出来使用，很可能会报错。
class Person1 {
    constructor(name){
        this.name=name;
    }
    say(){
        console.log('saying...');
        console.log(this.name);
    }
}
let lx1=new Person1('lx1');
console.log(lx1);
let {say}=lx1;
console.log(lx1.hasOwnProperty(say)); // false
// say() 报错： this找不到



// 解决|>
// 通过 bind、apply 或 call 来指定函数中的 this。
let obj ={name:'嘎嘎'};
say.apply(obj);
