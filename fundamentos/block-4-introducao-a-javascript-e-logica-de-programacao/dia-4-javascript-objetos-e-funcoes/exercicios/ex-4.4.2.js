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

console.log(lowestInGroup([2, 4, 6, 7, 10, 0, -3]))


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

function nOccurence(arr){
    count = 0
    for (var c of arr){
        if ()
    }
}