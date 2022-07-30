function fSinParametros() {
    return true;
}

function fAsincrona() {
    setTimeout(() => {
        console.log("Hola soy una promesa");
    }, 5000);
}

function* fGeneradora() {
    let i = -2;
    while(true) {
        i += 2;
        if(i > 1000) return i;
        yield i;
    }
}