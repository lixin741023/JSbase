// Proxy 代理

// Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，
// 所以属于一种“元编程”（meta programming），即对编程语言进行编程。

// 解释：
// Proxy 可以理解为在目标与对象之间设置一层 “拦截” ，
// 外界在访问该对象的时候，都必须先通过这层拦截，
// 因此可以在此时对外界的访问进行过滤和改写。

// todo: 考虑后续追加。。。

let obj={
    get name(){
        return 'get_lx';
    },
    set name(x){
        console.log(x);
        console.log(this);
    },
    year: 25
};
obj.name='l';
console.log(obj.name);
