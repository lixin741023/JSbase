// Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
// 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。

// Promise 的2个特点：
// 1、对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
// <|只有异步操作的结果，可以决定当前是哪一种状态，
// 2、一旦状态改变，就不会再变，任何时候都可以得到这个结果。
// <|状态的变化只有2种可能：pending--->fulfilled 或者是 pending --->rejected。

// Promise的主要作用：将异步操作以同步操作的流形式表示出来，避免了层层嵌套的回调函数。

// Promise的缺点：
// 1、无法取消，一旦新建成功Promise就会立即执行，无法中途取消。
// 2、如果不设置回调函数，Promise内部抛出的错误是不会反应到外部的。
// 3、当 Promise 处于 pending 状态的时候，无法知道目前进展到了哪一个阶段。（刚开始？或是即将完成？）