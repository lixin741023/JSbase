// 通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。

function fun() {
    return 'I\'m f1';
}

let name='lx';

export {
    name as myName,
    fun as f1,
    fun as f2
};

// <|使用了 as 关键字，对 fun 和 name 重命名了对外接口。
// fun 可以用不同的名字输出2次

export default 12;

// <|import * 会忽略掉 默认输出接口