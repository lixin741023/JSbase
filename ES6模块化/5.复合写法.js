// 如果在一个模块之中，先输入，后输出同一个模块，import语句可以与export语句写在一起。
/**
 * export { XXX1, XXX2 } from 'XXX';
 * // <|等同于
 * import { XXX1, XXX2 } from 'XXX';
 * export { XXX1, XXX2 };
 */
// <|
// 需要注意的是，如果这样写， XXX1，XXX2实际上并没有被导入当前模块，
// 只是相当于对外转发了这2个接口！
// 当前模块是不能够正常使用 XXX1，XXX2的。
