// export 和 import 的复合写法
// 标识：2

import {string1} from "../复合写法/7.2.E和I的复合写法";
console.log(string1); // 1

import * as allString from '../复合写法/7.2.E和I的复合写法';
console.log(typeof allString); // object
console.log(allString); // {str2: 2, str3: 3, string1: 1}
console.log(allString.str2); // 2