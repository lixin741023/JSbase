// 执行环境（execution context，为简单起见，有时也称为“环境”）是 JavaScript 中最为重要的一个概念。
// 执行环境定义了变量或函数有权访问的其他数据，决定了它们各自的行为。
// 每个执行环境都有一个与之关联的 变量对象（variable object），环境中定义的所有变量和函数都保存在这个对象中。
// 虽然我们编写的代码无法访问这个对象，但解析器在处理数据时会在后台使用它。

// 全局执行环境是最外围的一个执行环境。
// 根据 ECMAScript 实现所在的宿主环境不同，表示执行环境的对象也不一样。
// 列入：在 Web 浏览器中，全局执行环境被认为是 window 对象。

// 而当代码在一个环境中执行时，会创建一个 变量对象 的作用域链（scope chain），用于搜索 变量 和 函数。
// 向上搜索，直到搜索到全局环境为止。
// 作用域链的用途，是保证对执行环境有权访问的所有变量和函数的有序访问。

