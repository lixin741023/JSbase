// 模块的整体加载
// 之前我们一直是使用 {} ，单独指定加载某个输出值，
// 我们可以是 * 号指定一个对象，所有接口输出的值都加载到这个对象上。

import * as m5 from '../export/5';

console.log(typeof m5); // object
console.log(m5); // [module]{f1:[Function: fun],f2:[Function:fun],myName:'lx'}
console.log(m5.f1()); // I'm f1
console.log(m5.f2()); // I'm f1

// import * 会忽略掉 默认输出接口