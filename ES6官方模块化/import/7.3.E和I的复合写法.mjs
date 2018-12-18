// export 和 import 的复合写法
// 标识：3

import otherStr from '../复合写法/7.3.E和I的复合写法';
import {obj} from "../复合写法/7.3.E和I的复合写法";

console.log(otherStr);
console.log(obj);
console.log(otherStr == obj); // true
console.log(otherStr === obj); // true

