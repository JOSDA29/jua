/* Crear un programa en Javascript que verifique si un número es divisible por 3 y por 5 al
mismo tiempo.*/

let numero = parseFloat(prompt("Digite cualquier numero"))

if (numero%3 == 0 && numero%5 == 0) {
    console.log(numero,"es divisible tanto por 3 como por 5");
}
else if (numero%3 == 0 && numero%5 != 0) {
    console.log(numero,"es divisible por 3, pero no es divisible por 5");
}
else if (numero%5 == 0 && numero%3 != 0) {
    console.log(numero,"es divisible por 5, pero no es divisible por 3");
};
