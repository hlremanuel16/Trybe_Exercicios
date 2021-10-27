// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const testingScope = (escopo) => {
  
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  }else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
  console.log(elseScope)
  }
}
testingScope(false);



const oddsAndEvens = [13, 3, 4, 10, 7, 2];
let oddsAndEvensJoin = oddsAndEvens.join()
// Seu código aqui.
const sortedAndJoined = oddsAndEvens.sort((a, b) => a - b);

console.log(`os numeros ${oddsAndEvensJoin} ficam assim quando se encontem em forma crescente: ${sortedAndJoined}`);