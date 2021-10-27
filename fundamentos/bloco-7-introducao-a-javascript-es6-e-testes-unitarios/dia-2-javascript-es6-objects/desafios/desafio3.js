// Desenvolva uma função que receba um array de números e retorne verdadeiro se
//TODOS os valores forem maior que o número recebido por parâmetro, falso caso contrário

// Ex: 
// array: [20, 30, 19, 1, 50]
// number: 20
// resultado esperado: false 

// Ex: 
// array: [20, 30, 19, 21]
// number: 18
// resultado esperado: true
arr = [20, 30, 19, 21]
function allGreaterThan(number, array) {
  conf = true;
  for (let i in array){
    if (array[i] < number) {
      conf = false;
      break;
    }
  }
  return conf;
}

console.log(allGreaterThan(31, arr))