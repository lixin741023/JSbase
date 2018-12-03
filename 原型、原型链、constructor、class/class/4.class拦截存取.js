// 与 ES5 一样，在“类”的内部可以使用 get 和 set 关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
class Person1{
    get myName(){
        return 'lx'
    }
    set myName(x){
        return this.name=x+'1';
    }
}
let me=new Person1();
console.log(me.myName); // lx
console.log(me.myName='gogogo'); // gogogo
console.log(me.name); // gogogo1
// <|上面代码中，myName 属性有对应的 存值函数 和 取值函数 ，因此赋值和读取行为都被自定义了。
// 存值函数 和 取值函数 是设置在属性的 Descriptor 对象上的。