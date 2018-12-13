// JavaScript原有表现集合的数据结构，主要有 Array、Object，ES6又新增了 Set、Map。
// 每种数据结构的成员有可能不一样，Map的是对象，Array的有可能是 String、Number。
// 所以，这就需要一个统一的接口机制，来处理不同的数据结构。

// 遍历器（Iterator）就是这样一种机制。
// 它是一种接口，为各种不同的数据结构提供统一的访问机制。
// 任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

// Iterator 的作用有三个：
// 1、为各种数据结构，提供一个统一的、简便的访问接口。
// 2、使得数据结构的成员能够按某种次序排列。
// 3、ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。

// Iterator 的内部工作方式：
// 1、创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
// 2、第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
// 3、第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
// 4、不断调用指针对象的next方法，直到它指向数据结构的结束位置。
// <|每一次调用next方法，都会返回数据结构的当前成员的信息。
// <|具体来说，返回的是一个包含value和done两个属性的对象。
// <|其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。

// 目前，原生具备 Iterator 接口的数据结构如下。
// Array
// Map
// Set
// String
// TypedArray
// 函数的 arguments 对象
// NodeList 对象
