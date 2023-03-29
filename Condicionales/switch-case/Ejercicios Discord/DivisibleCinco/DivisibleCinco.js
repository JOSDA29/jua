/*Cree un programa que lea un número y muestre si este es divisible entre cinco o no.*/

let numero = parseFloat(prompt("Digite cualquier numero"));
let procedimiento = numero%5;
let resultado = procedimiento == 0;

switch (resultado) {
    case true:
        console.log(numero,"es un numero divisible entre 5");
        break;
    default:
        console.log(numero,"no es un numero divisible entre 5");
        break;
}