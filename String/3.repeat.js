let str='DJ';

// 1、repeat()
// 方法返回1个新的字符串，是原字符串的n次。
console.log(
  str.repeat(2) // DJDJ
);
console.log(
  str.repeat(3.5) // DJDJDJ
);
// 参数如果是小数，后被取整。
// 参数如果是负数，或Infinity，会报错。
// 如果是 0 到 -1 之间的小数，则等同于 0 。
// NaN 等同于 0 。
console.log(
  str.repeat(NaN) // ''
);