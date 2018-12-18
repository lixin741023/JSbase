// 而本质上 export default 输出了一个叫做 default 的变量或方法，然后系统允许开发者在 import 它的时候，可以任意取个名字。

function fun() {
    console.log(`I'm fun`);
}

export {fun as default};
// 等同于：
/**
 * export default fun;
 */

// 正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
/**
 *
 * export let x=1;
 * <|执行
 *
 * let x=1;
 * export {x};
 * <|执行
 *
 * let x=1;
 * export default x;
 * <|执行
 * <|export default x的含义是将变量 X 的值赋给变量default。
 *
 * export default let x=1;
 * <|报错
 *
 */
// 因为export default命令的本质是将后面的值，赋给default变量，
// 所以可以直接把一个值写在export default后面。
/**
 *
 * export default 42
 * <|执行
 *
 * export 42
 * <|报错
 * 
 */