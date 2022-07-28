let n = 10;
let result = 1;
let i = 1;

while(i <= 15) {
    result *= i;
    if(i === n) break;
    i++;
}

console.log(result);