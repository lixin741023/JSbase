// 加载也可以使用 as 来重命名加载的模块

import {f1 as fun} from '../export/4';
console.log(fun('me')); // It's f1- me

import {f2} from '../export/4';
console.log(f2('you')); // It's f2- you

import {cl1 as cl} from "../export/4";
console.log(cl); // [Function:me]
let lx=new cl();
console.log(lx.speak()); // I'm speaking