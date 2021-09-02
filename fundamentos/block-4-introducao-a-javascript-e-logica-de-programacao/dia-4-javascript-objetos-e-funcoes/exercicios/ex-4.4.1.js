let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('bem-vinda, ' + info.personagem);

console.log();

info['recorrente'] = 'sim';

for (let c in info){
    console.log(c, info[c])
};

console.log();

for(let i in info){
    console.log(i)
};

let info2 = {
    personagem: 'Tio patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota:  'O último MacPatinhas',
    recorrente: 'sim',
};

console.log();

for (let i in info){
    if (
        i === 'recorrente' &&
        info[i] === 'sim' &&
        info2[i] === 'sim'
    ) {
        console.log('ambos recorrentes');
    } else {
        console.log(info[i] + ' e ' + info2[i]);
    }
}
