let score ='90';

switch (score) {
    case (score) >= 90:
        console.log('A');
        break;
    case (score) >= 80:
        console.log('B');
        break;
    case (score) >= 70:
        console.log('c');
        break;
    case (score) >= 60:
        console.log('D');
        break;
    case (score) >= 50:
        console.log('E');
        break;
    case (score) < 50:
        console.log('f');
        break;
    case (score) < 0 || score > 100:
        console.log('invalid score');
        break;
    default:
        console.log('unforeseen event');
        break;
}