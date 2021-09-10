function palindromeDetect(text){
let reverse = text.split().reverse().join('');
    if (reverse === text){
        return true;
    }else{
        return false;
    }
}

console.log(palindromeDetect('arara')) // não se pode modificar strings na forma simples, antes, devem ser jogadas na forma iterável.

function highestInGroup(arr){
    let high = 0;
    for (let index in arr)
        if (high < arr[index]) {
            high = index;
        }
    return high;
}

console.log(highestInGroup([2, 3, 6, 7, 10, 1]))


function lowestInGroup(arr){
    let low = Infinity;
    for (let index in arr) {
        if (low >= arr[index]) {
            low = arr[index];
        }
    }
    return low;
}

console.log(lowestInGroup([2, 4, 6, 7, 10, 0, -3]));


function bWord(arr){
    let fWord = arr[0];
    for (let key in arr) {
        if (arr[key].length > fWord.length) {
            fWord = arr[key];
            
        }
    }
    return fWord;
}

console.log(bWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

function somaDosElementos(num){
  let numeros = [];
  soma = 0
  for (let index = 1; index < num + 1; index++) {
    numeros.push(index)
    soma += index
  }
  return numeros.join(' + ')
}

console.log(somaDosElementos(5) + ' = ' + soma)

function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
        controle = false;
      }
    }
    return controle;
}
