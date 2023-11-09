let i = 0;
let j = 0;
let TRAB = 1;
let VAR = 2;

while(i < 5){
    VAR = VAR + 5;
    i = i + 1;
    while(j < 10){
        if(j % 2 == 0){
            TRAB = TRAB + 2;
        }
        j = j + 1;
    }
}

console.log(TRAB);
console.log(VAR);
