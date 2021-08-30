// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let summ = 0;

for (let index = 0; index < numbers.length; index += 1) {
    summ += numbers[index];
}

avarege = (summ / numbers.length);

if (avarege < 20) {
    console.log('média é menor que 20');
   
}else {
    console.log('média é maior que 20');
}