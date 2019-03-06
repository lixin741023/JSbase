// for...of 循环可以自动的遍历 Generator 函数 运行时生成的 Iterator 对象。
// <|因此，可以不需要用 next（）

function* f() {
    for(let i=0; i<5; i++){
        yield [i, i+'a']
    }
}

console.log( // 0 1 2 3 4
    ...f()
);


// 除了for...of循环以外
// 扩展运算符（...）
// 解构赋值
// Array.from方法内部调用的
// <|都是遍历器接口。这意味着，它们都可以将 Generator 函数返回的 Iterator 对象，作为参数。

// todo 可以在 Generator 函数中调用另外一个Generator 函数，需要用到 yield *，根据日常工作使用评率，考虑有待后续继续完善。
