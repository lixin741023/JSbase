// 字符串 String 是一个类数组的对象，原生也具有 Iterator 接口。
let str='hello';
console.log(
    [...str] // ['h', 'e', 'l', 'l', 'o']
);
console.log(
    {...str} // {'0':'h', '1':'e', '2':'l', '3':'l', '4':'o'}
)