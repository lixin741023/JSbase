// for...of 循环，作为遍历所有数据结构的统一方法。
// 一个数据结构只要部署了 Symbol.iterator 方法，就被视为具有Iterator接口，就可以使用 for...of 进行遍历。
// for...of 循环，内部调用的就是数据结构的 Symbol.iterator 方法。
