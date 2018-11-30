// 作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
let m1=new Map([
    ['name', '1'],
    ['year', 2],
    ['print'],
    [,4],
    [1,2,3]
]);
console.log(m1); // Map{ 'name'=>'1', 'year'=>2, 'print'=>undefined, undefined=>4， 1=>2 }

// 事实上，任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数。
// 这就是说，Set和Map都可以用来生成新的 Map。