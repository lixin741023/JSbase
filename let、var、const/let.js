// let声明的变量不存在于window对象之中，而是放在块级作用域之中，块级作用域也是ES6新增的一个作用域。而且let声明不具有“变量提升”效果。
+function () {
    console.log(a); // 报错，在不具有“变量提升”的情况下，去操作1个不存在的变量。
    let a =122;
}();

let arr_a=[];
for(let i=0; i<10; i++){
    arr_a[i]=function () {
        console.log(i);
    }
}
arr_a[2](); // 弹出2
// <|数组中的每一个Function，都有自己的作用域，作用域中有属于自己的i，所以arr_a[2]()弹出2，arr_a[1]()弹出1。