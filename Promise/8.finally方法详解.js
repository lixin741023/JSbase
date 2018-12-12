// Promise.prototype.finally();
// finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。
function ajax1() {
    return new Promise((resolve,reject)=>{
        let num=Math.random().toFixed(1);
        if(num>=0.5){
            resolve(num);
        }else{
            throw ('num<0.5,so error');
        }
    })
}
ajax1().then((succ)=>{
    console.log(succ);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('操作完成');
});
// fixme：Promise的finally方法在浏览器环境下能正常使用，在node环境下却发生了报错。why？