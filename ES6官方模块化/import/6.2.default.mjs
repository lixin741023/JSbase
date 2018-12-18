// 而本质上 export default 输出了一个叫做 default 的变量或方法，然后系统允许开发者在 import 它的时候，可以任意取个名字。

import {default as fun1} from "../export/6.2.default";
// 等同于：
// import fun1 from '../export/6.2.default';
import fun2 from '../export/6.2.default';

fun1(); // I'm fun
fun2(); // I'm fun
