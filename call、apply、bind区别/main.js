// 定义：ECMAScript规范为所有函数都包含两个方法(这两个方法非继承而来)，call 和 apply 。
// 这两个函数都是在特定的作用域中调用函数,能改变函数的作用域，实际上就是改变函数体内 this 的值。

let obj1={
    name:'lx'
};

let obj2={
    name:'wk'
};

function f1(x,y) {
    return `${this.name} 的身高是 ${x}, 体重是 ${y}。`
}

console.log(f1.call(obj1,100,200)); // lx 的身高是 100，体重是 200
console.log(f1.apply(obj2,[50,150])); // wk 的身高是 50，体重是 150

// <|上述 call 和 apply 的唯一区别是：当需要传递参数时，apply 是必须以数组形式来传递参数。