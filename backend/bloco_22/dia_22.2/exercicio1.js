function firstDegree(a, b, c) {
  const promisse = new Promise((resolve, reject) => {
  if  (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    reject(new Error('insert a number in the params'))
  }

  const result = ((a + b) * c)

  resolve(result);
  })

  return promisse;
}

module.exports = {
  firstDegree
};