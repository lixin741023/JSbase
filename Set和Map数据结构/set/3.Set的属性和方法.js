// Set.prototype.constructor
// <|构造函数，就指向Set函数本身

// Set.prototype.size
// 返回Set实例中有多少个成员的总数

// 其他方法：
// 操作方法（用于操作数据）
// *Set.prototype.add(XXX) 添加某个值，返回 Set 实例本身。
// *Set.prototype.delete(XXX) 删除某个值，返回布尔值，表示删除是否成功。
// *Set.prototype.has(XXX) 检查某个值，返回布尔值。
// *Set.prototype.clear(XXX) 清除所有成员，没有返回值。

// 遍历方法（用于遍历成员）
// *Set.prototype.keys() 返回键名的遍历器
// *Set.prototype.values() 返回键值的遍历器
// *Set.prototype.entries() 返回键值对的遍历器
// *Set.prototype.forEach() 使用回调函数遍历每个成员

// 特性：
// *需要特别指出的是，Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。
// *keys方法、values方法、entries方法返回的都是遍历器对象（详见《Iterator 对象》一章）。
// *由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。

let s1=new Set([11,'22',33,44]);

for(let i of s1.keys()){
    // console.log(i); // 11 22 33 44
}
for(let i of s1.values()){
    // console.log(i); // 11 22 33 44
}
for(let [i,z] of s1.entries()){
    // console.log(i); // [11, 11] [22, 22] [33, 33] [44, 44]
}
console.log(s1);
console.log(s1.keys());
console.log(s1.values());
console.log(s1.entries());

// ***Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。
console.log(
    Set.prototype[Symbol.iterator] === Set.prototype.values
); // true
// <|这意味着，可以省略values方法，直接用for...of循环遍历 Set。
console.log(s1[Symbol.iterator]);