// 错误处理

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
