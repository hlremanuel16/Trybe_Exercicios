// Desenvolva uma função que receba um array como parâmetro e
// retorne um array com os números pares

// let arr = [ 1,2,3,4,5]
// function getEvenNumbers(array) {
//   let even = []
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2 === 0) {
//       even.push(arr[index])
//     }
//   }
//   return even
// }

// console.log( getEvenNumbers(arr) ); // [2,4]

let arr = [ 1,2,3,4,5]
function getEvenNumbers(array) {
  let even = []
  for (let index in arr) {
    if (arr[index] % 2 === 0) {
      even.push(arr[index])
    }
  }
  return even
}

// console.log( getEvenNumbers(arr) ); // [2,4]

// function getEvenNumbers(arr) {
//   let even  = []
//   while ((array <= arr.lenght)) {
//     let array = 0
//     let ternary = (arr[array] % 2 === 0) ? even.push(even) : 
//     array += 1
//   }
//   return even
// }

// console.log(getEvenNumbers(arr))