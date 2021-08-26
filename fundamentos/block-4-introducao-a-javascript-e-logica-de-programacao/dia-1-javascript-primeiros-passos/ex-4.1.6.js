let piece = ('ROOk').toLowerCase();
console.log(piece);

switch (piece) {
    case piece = 'pawn':
        console.log('1 sq front, 1 sq diag  fornt if killing a piece')
        break;
    case piece = 'rook':
        console.log('n sqs horizontal or vertical');
        break;
    case piece = 'knight':
        console.log('3 sqs horizontal 1 sqs vertical or 3 ssqs verical and 1 sq horizontal ');
        break;
    case piece = 'bishop':
        console.log('n sqs diagonal');
        break;
    case piece = 'queen':
        console.log('n sqs any direction');
        break;
    case piece = 'king':
        console.log('1 sq any direction');
        break;
    default:
        console.log('invalid piece');
        break;
}