// 对象的访问器属性：getter、setter
// 访问器属性不包含数据值；它们是一对 getter 和 setter 函数（不过，这两个函数都不是必需的）。

let obj={
    get name(){
        return 'lx'
    },
    set name(params) {
        console.log('setter has executed: '+params);
    }
};

console.log(obj.name);
obj.name='newName';
