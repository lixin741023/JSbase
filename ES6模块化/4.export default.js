// 从前面的例子可以看出：
// 使用import命令的时候，无论是 通过*整体加载，还是单个引入加载，
// 用户都需要知道所要加载的变量名或函数名，否则无法成功加载。
//
// 但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。
//
// 为了给用户提供方便，让他们不用阅读文档就能加载模块(拿到就用)，就要用到export default命令，为模块指定默认输出。
/** unit.js
 * export default function f4 () {} // 指定1个默认输出（1个模块只能有1个默认输出哦！）
 */

/**
 * import XXX from './unit.js'; // 引入1个默认输出，不加大括号！
 */

// 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。
/** unit.js
 * let xxx = 1;
 * export {xxx as default}; // 等同于 export default xxx;
 */

/**
 * import {default as XXX} from './unit.js'; // 等同于 import XXX from './unit.js';
 */

// 因为export default命令的本质是将后面的值，赋给default变量，所以下面的写法是正确的：
/**
 * export default 123;
 */

// 有了export default命令，输入模块时就非常直观了，以输入 lodash 模块为例。
/**
 * import _ from 'lodash';
 */

// 如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样。
/**
 * import _, { func1, func2 } from 'lodash';
 */
