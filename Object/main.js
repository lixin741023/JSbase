// ES6 新增了一些简写，增强对象写法：

let name='lx';
let  obj={
    name, // name: name  #1
    action () {
        return 'year 25' // action: function () { return 'year 25' }
    },
    *gn () { yield 'hello world' } // #2
};
console.log(obj);

// #1 简洁写法的属性名总是字符串。
// #2 如果方法是一个Generator函数，需要在前面加上*号。

