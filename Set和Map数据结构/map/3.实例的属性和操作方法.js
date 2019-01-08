// 1、size属性，返回Map结构成员总数。
let m1=new Map([[1,2],[2,3],[4,5]]);
console.log(m1.size); // 3

// 2、set方法，设置键名key对应的键值为value，然后返回整个 Map 结构,所以可以采用 链式写法。
// set(key, value)
// 如果key已经有值，则键值会被更新，否则就新生成该键。
let m2=new Map();
console.log(m2.set(1,2)); // Map{ 1=>2 }

// 3、get方法，读取key对应的键值，如果找不到key，返回undefined。
// get(key)

// 4、has方法，表示某个键是否在当前 Map 对象之中。返回布尔值。
// has(key)

// 5、delete方法，删除某个键，返回true。如果删除失败，返回false。
// delete(Key)

// 6、clear方法，清楚所有成员，没有返回值。
// Map.clear()

// 遍历方法：--------------------------------
// Map 结构原生提供三个遍历器生成函数和一个遍历方法。

// keys()：返回键名的遍历器。
// values()：返回键值的遍历器。
// entries()：返回所有成员的遍历器。 - 默认
// forEach()：遍历 Map 的所有成员。

// 特性：Map 的遍历顺序就是插入顺序。

let m3=new Map([[1,11],[2,22]]);
console.log(m3);
for(let i of m3.keys()){
    // console.log(i); // 1 2
}
for(let i of m3.values()){
    // console.log(i) // 11 22
}
for(let i of m3.entries()){
    // console.log(i);  // [1, 11] [2, 22]
}

// |>Map 结构的默认遍历器接口（Symbol.iterator属性），就是entries方法。
console.log(m3[Symbol.iterator]); // [Function: entries]
console.log(Map.prototype[Symbol.iterator]); // [Function: entries]
