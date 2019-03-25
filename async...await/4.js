// 错误处理
// async 函数内部抛出的错误，同样会让 Promise 对象变为 reject 的状态，
// <|错误同样会被 catch 函数捕捉到。

async function f(bool) {
    let a = await asyncFun1();
    let b = await asyncFun2();
    return 'GG';
}

f().then(text => {
    console.log(text);
}).catch(err => {
    console.log('抓取的报错信息：' + err)
});

function asyncFun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('It is AYfun1')
        }, 500)
    })
}

function asyncFun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('错误……')
        }, 500)
    })
}
