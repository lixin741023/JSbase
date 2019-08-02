// 排序demo：
var arr = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 0 },
  { name: 'Zeros', value: 37 }
];

arr.sort((first, second) => {
  return first.value - second.value
});
console.log('根据value进行排序：',arr);

arr.sort((first, second) => {
  if (first.name < second.name) return -1;
  if (first.name > second.name) return 1;
  return 0;
});
console.log('根据name进行排序：',arr);

