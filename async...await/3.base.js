// await 对应的函数 也可以直接返回一个对应的值。

async function f() {
    console.log('step1');
    await normalFun();
    let step3 = await asyncFun();
    console.log(step3);
    console.log('f_finish');
    return 'end';
}

function normalFun() {
    console.log('step2');
}

function asyncFun() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('step3_async')
        }, 2000)
    })
}

f().then(text => {
    console.log(text)
});
