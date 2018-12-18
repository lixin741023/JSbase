// import 引入默认输出时，可以不加大括号，
// 因为一个模块只能有1个默认输出，所以不加大括号，也是能够知道是唯一对应引入模块的 export default 接口。

import anything from '../export/6.1.default';

console.log(anything); // [Function: fun]
console.log(typeof anything); // function

anything(); // fun