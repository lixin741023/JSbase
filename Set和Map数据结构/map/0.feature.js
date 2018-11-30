// Map特性：

// 1、只有对同一个对象的引用，Map 结构才将其视为同一个键。
let m1=new Map();
m1.set(['a'], 1);
m1.set(['a'], 2);
console.log(m1); // Map{ ['a']=>1, ['a']=>2 }
console.log(m1.get(['a'])); // undefined
// <|这里的 ['a'] 不是同一个引用，即内存地址都不相同。
// 0 和 -0 是同一个键。
// undefined 和 null 是2个不同的键。
// 虽然 NaN不严格相等，但是在Map结构中，NaN是相同的键。
