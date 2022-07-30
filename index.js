const fibonacciIterativo = (n) => {
    let a = 0;
    let b = 1;
    let c = 0;
    let array = [];
    for (let i = 0; i < n; i++) {
        c = a + b;
        array.push(c);
        a = b;
        b = c;
    }
    return array;
};

console.log(fibonacciIterativo(10));