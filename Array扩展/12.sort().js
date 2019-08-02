// 一般我们通过1个比较函数，来进行排序；
function compareFun(first, second) {
  if (first < second) return -1;
  if (first > second) return 1;
  return 0
}
// <|
// first：用于比较的第一个参数
// second：用于比较的第二个参数
// compareFun 的返回值 < 0：first 会被排到 second 前面
// compareFUn 的返回值 > 0：second 会被排到 first 前面
// compareFUn 的返回值 === 0：first 和 second 位置不会发生改变

let arr = [1,2,22,1,1,4,65,464,7,8,999];

arr.sort((first, second) => {
  return first - second;
});
console.log(arr);
