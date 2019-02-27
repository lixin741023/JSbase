// Generator.prototype.next()
// Generator.prototype.return()
// Generator.prototype.throw()

// <|以上3个方法本质上做的都是同一件事情，让 Generator 函数恢复执行，用不同的 语句，代替 yield 表达式。
// next()是将yield表达式替换成一个值。
// return()是将yield表达式替换成一个return语句。
// throw()是将yield表达式替换成一个throw语句。

// <|详见《ECMAScript6入门》阮一峰，17.6："next()、throw()、return() 的共同点";
