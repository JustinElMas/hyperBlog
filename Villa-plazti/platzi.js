
for (i = 0; i <= 10; i++) {
    var k = aleatorio(10, 20);
    document.write(k + ", ");
}
// por qué no puedo sumear dos variables de una variable global a una variable local
function aleatorio (min, maxi) {
    let num1 = 1; 
    var resultado = Math.floor(Math.random() * (maxi - min + num1)) + min;
    return resultado;
}