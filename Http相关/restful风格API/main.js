// 概念：
// restful风格API是一种设计模式。
// 说得直白一点就是：一个资源定位 及 资源操作的风格。
// 它既不是什么标准也是不是什么协议，只是一种风格。
// 基于这个风格设计的软件可以更简洁，更有层次，更易于实现缓存等机制。

// 资源：互联网所有的事物都可以被抽象为资源
// 资源操作：使用POST、DELETE、PUT、GET，使用不同方法对资源进行操作。
// 分别对应 添加、 删除、修改、查询。

// 下面对比 传统方式 和 restful风格 的区别：

// http://127.0.0.1/item/queryItem.action?id=1  查询,GET
// http://127.0.0.1/item/saveItem.action        新增,POST
// http://127.0.0.1/item/updateItem.action      更新,POST
// http://127.0.0.1/item/deleteItem.action?id=1 删除,GET或POST

// http://127.0.0.1/item/1   查询, method = GET
// http://127.0.0.1/item     新增, method = POST
// http://127.0.0.1/item     更新, method = PUT
// http://127.0.0.1/item/1   删除, method = DELETE


