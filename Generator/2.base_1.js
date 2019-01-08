// Generator 函数执行后，并不返回运行结果，而是返回一个指向内部状态的指针对象
// <|也就是遍历器对象(Iterator Object)

// 既然是一个遍历器对象，则可以调用该对象的 next方法，
// <|内部指针从函数的头，或者上一次停止的地方开始执行，
// <|直到遇到下个 yield表达式 或者 return 语句为止。

// 可以认为 Generator 函数就是一个类似 “分段”执行操作的函数。

function* ge() {
    yield 't1'; // 这个称为 yield 表达式（yield 英语里 有 “产出”的意思）
    yield 't2';
    return 'end';
}
let a=ge();
console.log(a); // ge
console.log(typeof a); // Object
console.log(a.next()); // {value:'t1',done:false}
console.log(a.next()); // {value:'t2',done:false}
console.log(a.next()); // {value:'end',done:true}
console.log(a.next()); // {value:undefined,done:true}

// value 的属性就是 yield表达式 的值。
// done 为false，则说明还没有执行到最后一段。
