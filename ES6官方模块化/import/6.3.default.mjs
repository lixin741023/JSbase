// 如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样。

import other_c,{a,b} from '../export/6.3.default';
console.log(a); // 1
console.log(b); // 2
console.log(other_c); // 3
