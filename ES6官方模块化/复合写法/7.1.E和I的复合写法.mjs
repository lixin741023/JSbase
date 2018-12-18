// export 和 import 的复合写法
// 标识：1

export {str1,str2} from '../export/7.1.E和I的复合写法';
// export和import语句可以结合在一起，写成一行
// 等同于
/**
 *
 * import {str1,str2} from '../export/XX'
 * export {str1,str2}
 *
 */
// 注意：
// 写成一行以后，foo和bar实际上并没有被导入当前模块，
// 只是相当于对外转发了这两个接口，所以当前模块是不能直接使用foo和bar。

// console.log(str1); // 报错
// console.log(str2); // 报错