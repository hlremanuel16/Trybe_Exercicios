const custo = 1;
const venda = 3;

if (custo >= 0 && venda >= 0){
    const custoTotal = custo * 1.2;
    const lucro = (venda - custoTotal) * 1000;
    console.log(lucro);
}else{
    console.log('não existe dinheiro negativo... hipoteticamente.');
}