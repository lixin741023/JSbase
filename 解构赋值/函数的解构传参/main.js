let me = {
  name: 'lx',
  year: 26,
  home: 692
};

function justName({name}) {
  console.log(name)
}
justName(me);

function f4({name, ...obj}) {
  console.log(name);
  console.log(obj);
}
f4(me);

