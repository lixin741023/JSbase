// 基本传参方式 + 双重默认值

function f(def,{pro1=1,pro2=2}={pro2:22}) {
    console.log(def);
    console.log(pro1);
    console.log(pro2);
}

f('text',{pro1:'pro1',pro2:'pro2'});
// text pro1 pro2

f({pro1:'pro1',pro2:'pro2'});
// {pro1:'pro1',pro2:'pro2'} 1 22
