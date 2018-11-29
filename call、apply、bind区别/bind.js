let obj={
    name:'lx'
};

function f1(x,y) {
    return `${this.name} 的身高是 ${x}, 体重是 ${y}。`
}

let f2=f1.bind(obj,3, 5);
console.log(f2(1,2)); // lx 的身高是 3，体重是 5。

// <| bind不会像 call 和 apply 一样立刻执行函数，而是会新生成1个函数，并绑定指定的 this。