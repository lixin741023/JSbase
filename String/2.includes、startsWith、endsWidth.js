let str='just one of a apple ';

// 1、includes()
// 返回布尔值，表示是否找到了参数字符串。
console.log(
    str.includes('of') // true
);

// 2、startsWidth()
// 返回布尔值，表示参数字符串是否在原字符串的头部。
console.log(
    str.startsWith('just one') // true
);

// 3、endsWidth()
// 返回布尔值，表示参数字符串是否在原字符串的尾部。
console.log(
    str.endsWith(' ') // true
);

// 以上3个方法都支持第二个参数，表示开始搜索的位置。