let obj = {};

/**
 *
 *   for(let item of obj){
 *      console.log(item);
 *   }
 *
 */
// ps：上述代码无法执行，因为 object 本不具有 Iterator 接口（不具有遍历器生成函数）。
// 但我们可以为它添加1个。|>

function* fun() {
    for(let i=0; i<5; i++){
        yield i
    }
}

obj[Symbol.iterator] = fun;

console.log(...obj); // 0 1 2 3 4

// ps：
// 1、任何一个对象上的 Symbol.iterator 方法，等于该对象的 遍历器生成函数。
// 2、Generator 函数，就是1个遍历器生成函数。
// 3、obj 对象本身并不具有 遍历器生成函数（没有Symbol.iterator方法）。
// 4、所以，我们可以手动的 为 obj 添加1个 遍历器生成函数。（就是在它的 symbol.iterator 属性上）
// 5、具有了 Iterator 接口的对象，则可以使用 ...、for...of 等。
