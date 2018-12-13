// 模板字符串可以紧跟在一个函数后面，该函数将会被调用来处理这个模板字符串，
// <|这个就被称为：标签模板 功能。(tagged template)。

let a=1;
function f(text,param1,param2) {
    console.log(text); // ['', '', 'tt']
    console.log(param1); // 1
    console.log(param2); // 1
}
f`${a}${a}tt`;
// 标签模板 其实并不是模板，而是函数调用的一种形式。
// <|标签 指的就是函数，紧跟在后面的 模板字符串 就是参数。
