const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((todos, juntos) => todos.concat(juntos), [])
}

console.log(flatten())
