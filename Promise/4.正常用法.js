// 由于Promise新建后，就会立刻执行，所以，一般是吧Promise放在一个function中。
function httpRequest(url) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            url && resolve('请求发送成功');
            !url && reject('目标地址不合法');
        }, 1500)
    })
}

let url = '192.168.1.1';

httpRequest(url).then(
  suc => {
      console.log(suc)
  },
  err => {
      console.log(err)
  }
);

