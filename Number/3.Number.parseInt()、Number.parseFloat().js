// ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
// 这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。

console.log(
    Number.parseInt === parseInt // true
);

console.log(
    Number.parseFloat === parseFloat // true
);

// ES5的写法
parseInt('12.34'); // 12
parseFloat('123.45#'); // 123.45

// ES6的写法
Number.parseInt('12.34'); // 12
Number.parseFloat('123.45#'); // 123.45