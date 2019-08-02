// import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。
// 但是如果import导出了1个对象，改写对象的属性是可以的。
/**
 * import obj from 'XXX';
 * obj.name = 'lx'
 */

// 如果我们import了1个模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。
// 一般npm会有配置？
/**
 * import XXX from 'XXX';
 */

// 由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。
/**
 * if (true) { import XXX from 'XXX' } // 报错
 */

// import语句会执行所加载的模块，因此可以有下面的写法。
/**
 * import 'underscore';
 * import './style/index.css';
 */
