// 由于Promise新建后，就会立刻执行，所以，一般是吧Promise放在一个function中。
function ajax1(url) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('requestData');
        })
    })
}
ajax1('xxx').then((x)=>{
    console.log(x);
});
