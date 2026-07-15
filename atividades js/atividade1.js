function parimpar(n) {
    if (n % 2 == 0) {
        return true
    }
    else {
        return false
    }
}
let resultado = parimpar(9);
if (resultado == true) {
    console.log("true");
}
else {
    console.log("false");
}
