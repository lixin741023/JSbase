// 由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性。
class Person {
    
}
console.log(Person.name); // Person

let Person1=class p1 {
    
}
console.log(Person1.name); // p1
