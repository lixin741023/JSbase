// 类的静态属性：
// 是指Class本身的属性，而不是定义在实例上的属性。

class Person {
    /**
     * static proposal='ing'; // #1
     */
}

Person.special_1='attention!';
Person.special_2='your focus!';

console.log(Person.special_1);
console.log(Person.special_2);

// <|静态属性同样不会被实例继承。

// #1 该写法目前处于提案中……
