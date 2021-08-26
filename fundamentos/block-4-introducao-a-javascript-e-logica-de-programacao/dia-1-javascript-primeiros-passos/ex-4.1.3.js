const a = 1;
const b = 2;
const c = 3;
resp = ""



if (a>b && a>c)  {
    resp = 'a';

}else if (b>a && b>c) {
    resp = 'b';

}else if (c>a && c>b){
    resp = 'c';    

}else {
    console.log("erro");
}

console.log(resp);