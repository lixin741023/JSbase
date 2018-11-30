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
// <|需要特别指出的是，Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。

// ECMAScript6 入门-Set和Map数据结构...？