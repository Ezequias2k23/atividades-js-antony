
function fatorial(n) {
    valor = 1;
    for(let i = n; i != 0; i--) {
        valor *= i;
    }
    return valor;
}

console.log(fatorial(4));