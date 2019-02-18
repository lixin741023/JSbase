// ECMAScript 中所有函数的参数都是按值传递的：
// 也就是说，把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。
// 那么，如果是 基本类型，则按照基本类型的特性进行复制。
// 如果是 引用类型，则按照引用类型的特性进行复制。
// 所以
{
    let person={
        name:'lx'
    };
    function info(who) {
        let will;
        will=who;
        return (will.year=26,will);
    }
    console.log(info(person));
    console.log(person);
}


