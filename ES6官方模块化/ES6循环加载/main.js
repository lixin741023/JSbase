// 模块存在循环加载的情况
// 即：
// a脚本 的执行依赖 b脚本，而 b脚本 的执行同样依赖 a脚本。

// 因此，“循环加载”表示存在强耦合，如果处理不好，还可能导致递归加载，使得程序无法执行，因此应该避免出现。