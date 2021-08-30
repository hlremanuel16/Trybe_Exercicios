// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let num = [];
let count = 26;
for (let index = 1; index < count; index++) {
    num.push(index);    
}

for (let index = 0; index < num.length; index++) {
    console.log(num[index] / 2);
    
}
