// 关于Symbol的一些特性
let a=Symbol('test');

// 1、Symbol 值不能与其他类型的值进行运算，否则会报错
let str='string';
// console.log(str+a); // 报错：Cannot convert a Symbol value to a string

// 2、Symbol 值也不能转为数值。
// console.log(Number(a)); // 报错： Cannot convert a Symbol value to a number

// 3、Symbol 值能够显示转换为字符串。
console.log(String(a)); // Symbol(test)
console.log(a.toString()); // Symbol(test)
console.log(a); // Symbol(test)

// 4、Symbol 值能够转换为Boolean类型。
console.log(Boolean(a)); // true
console.log(!Boolean(a)); // false
if(a){
    console.log(1); // $execute
}else{
    console.log(2);
}

// 5、Symbol作为属性名，但是却不会出现在 for...in、 for...of循环中。
let obj={
    name:'lx',
    year:25,
    print:'yes',
    [Symbol('a')]:'a'
}
for(let i in obj){
    console.log(i); // name/year/print
}
// 可以 Object.getOwnPropertySymbols 方法，获取到某一对象所有为 Symbol 值的属性。
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(a) ]
// 可以通过 Reflect.ownKeys 方法获取到某一对象所有属性名
console.log(Reflect.ownKeys(obj)); // [ 'name', 'year', 'print', 'Symbol(a)' ]
