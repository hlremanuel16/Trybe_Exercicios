const n = 5;
let space = '';
let filling = '';
 // faz uma linha de espaços de tamanho "n"
for (let index = 0; index < n; index += 1) {
    space += (' ');
}
// faz uma linha de "*" de tamanho "n"
for (let index = 0; index < n; index += 1) {
    filling += ('*');
    // trocar caracteres de cada linha começando pelo ultimo. 

}   
for (let index = 1; index < n + 1; index += 1) {
        console.log(space.slice(0, -index) + filling.slice(0, index));
    }
