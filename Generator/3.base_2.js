function* f({num1,num2}) {
    yield num1+num1;
    yield num2+num2;
    return num1+num2;
}

let iter=f({num1:1,num2:2});
console.log(iter.next()); // {value:2,done:false}
console.log(iter.next()); // {value:4,done:false}
console.log(iter.next()); // {value:3,done:true}
