// 1:
// export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
// 只有明确规定了对外的接口，其他脚本可以通过这个接口，取到值1。
// 它们的实质是，在接口名与模块内部变量之间，建立了一一对应的关系。

// 2:
// export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
// 而CommonJS 模块输出的是值的缓存，不存在动态更新，

// 3:
// export命令可以出现在模块的任何位置，只要处于模块顶层就可以。
// 如果处于块级作用域内，就会报错。
// import命令也是如此。
// 这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷。