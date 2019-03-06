// 类的静态方法：
// 类相当于实例的原型，类中定义的方法，都会被实例继承。
// 如果在某个方法前加上 static ，表示该方法不会被实例继承，
// 而是需要通过 类 来直接调用的，我们成为“静态方法”。

class S1 {
    static private(){
        console.log(this);
        console.log('privateMethods');
    };
    private (){}
}
S1.private();

// 静态方法中的 this 指的是当前类，不是实例。（因为静态方法都不会被实例所继承）
// 静态方法可以与非静态方法重名
// ! 父类 的静态方法可以被 子类 继承。
// |>

class S1_child extends S1 {

}
S1_child.private();
