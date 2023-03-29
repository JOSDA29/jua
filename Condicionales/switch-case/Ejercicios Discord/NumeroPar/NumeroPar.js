/*Cree un programa que lea un número y muestre si este es par o impar. */

let numero = parseFloat(prompt("Digite cualquier numero"));
let procedimiento = numero%2;
let resultado = procedimiento == 0;

switch (resultado) {
    case true:
        console.log(numero,"Es un numero par");
        break;
    default:
        console.log(numero,"Es un numero impar");
        break;
}