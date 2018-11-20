// var声明的变量会自动绑定绑定到window对象下，即可以通过window.XXX来访问到。

// var声明的变量带有“变量提升”效果。
+function () {
    console.log(a); // undefined
    var a=1;
}();
// 上述代码不会报错，实际的执行过程是|>
+function () {
    var a; // 声明一个变量a，不做任何操作，即新声明的变量为undefined状态。（这一步便是“变量提升”）
    console.log(a); // 所以弹出undefined。
    a=1;
}();

// 变量提升的多种情况，也有优先级
+function () {
    console.log(a); // Function:a
    var a=1;
    function a() {
        console.log('1');
    }
}();
// <|上述代码，变量提升的优先级，function a(){...} > var a；所以弹出Function:a

var arr_a=[];
for(var i=0; i<10; i++){
    arr_a[i]=function () {
        console.log(i)
    }
}
arr_a[2](); // 弹出10
// <|var声明的变量没有块级作用域，数组中的每一个Function都指向的是同一个i，i在逐渐的增加，一直加到了10。
// 所以不管是arr_a[1]()、arr_a[3]()、arr_a[7]()的结果都是10