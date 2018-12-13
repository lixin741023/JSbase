let str='lx';

// 1、padStart(a,b)
// 在字符串头部，补全一些东西
// 2、padEnd(a,b)
// 在字符串尾部，补全一些东西
// 参数a：补全补到多少长度
// 参数b：用什么来补

console.log(
    str.padStart(5,'z') // zzzlx
);

console.log(
    str.padEnd(5,'z') // lxzzz
);

// 省略第二个参数，会默认使用 空格 来补。

// 如果超过了最大长度，则截去超出位数的补全字符串。
'abc'.padStart(10, '0123456789'); // '0123456abc'

// 实际用途：
// 提示字符串格式：
// '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
// '09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"

