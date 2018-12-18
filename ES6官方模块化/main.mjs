// 目前常见的3种模块化方案：
// AMD：用于浏览器端、客户端的模块化，运行时确定依赖关系。
// commonJS：服务端的模块化，运行时确定依赖关系。—— nodeJS默认使用此方案
// ES6官方模块化：编译时即可确定模块之间的依赖关系。
// ES6 模块之中，顶层的this指向undefined，即不应该在顶层代码使用this。

// 如果要想在 node 环境下使用 ES6 官方模块化规范(Module)
// node 8.5 版本提供了：实验ES模块支持和缓存模块。
// 只能解析 *.mjs 结尾的文件
// 解析格式：
// node --experimental-modules *.mjs


// 操作说明：
// export、import文件夹中的文件相互对应：
// 即 export/2.mjs 导出的接口在 import/2.mjs 中被调用；
// export/6.2.default.mjs 导出的接口在 import/6.2.default.mjs 中被调用；