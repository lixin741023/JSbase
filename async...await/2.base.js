// await 只能存在于 async 函数内部。

// await 对应的函数在正常情况下，应该返回一个Promise对象，
// <|根据Promise对象的状态，来决定函数是否继续执行下去。


async function f(bol) {
    console.log('start');
    let result = await asyncFun(bol);
    console.log(result);
    console.log('end');
}

function asyncFun(bol) {
    return new Promise((resolve, reject) => {
        switch (bol) {
            case true:  resolve('继续'); break;
            case false: reject('终止'); break;
        }
    })
}

f(true);

