// Promise.prototype.catch()
// Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。

function ajax1() {
    return new Promise((resolve,reject)=>{
        reject('error1');
    });
}
console.log('------------');
ajax1()
.then(
    (succ)=>{
        console.log('then1-success: ',succ);
    }
)
.then(
    (succ)=>{
        console.log('then2-success: ',succ);
    }
)
.then(
    (succ)=>{
        console.log('then3-success: ',succ);
    }
)
.catch(
    (err)=>{
        console.log('final-error: ',err);
    }
)
.then(
    null,
    (err)=>{
        console.log('then4-error: ',err);
    }
);

// <|Promise 对象的错误具有“冒泡”的性质，会一直向后传递，直到被捕获为止。

// <|第一个Promise对象中的错误：“error1” 会一直向后传递
// <|一直遇到 catch 被捕获，然后打印出 final-error: error1 就停止了。
// <|不会被最后一个 then方法 捕获到。
