// 使用import命令的时候，用户需要知道对方输出（export）的变量名，或者函数名，
// 否则无法正常使用。
// 因此，为了给用户提供方便，模块默认输出 export default 出现了。
// 1个模块内部只能有1个 默认输出 （default）。

export default function () {
    console.log('fun')
};

/**
 * function fun() {}
 * export default fun
 *
 * export default function fun() {}
 */
// <|也可以 默认输出 非匿名函数。
// <|在上面的输出中，fun函数的函数名 fun,在模块外部是无效的，忽略的，加载的时候视为匿名函数加载。
