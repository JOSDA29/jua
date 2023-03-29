/*Cree un programa que lea un número y muestre si este es divisible entre cinco o no. */

let numero = parseInt(prompt("Digite cualquier numero"));
let resultado = numero/5;
let comprobacion = numero%5;

if (comprobacion == 0) {
    console.log("El numero",numero,"si es divisible entre 5, su resutado es",resultado);
}
else {
    console.log("El numero",numero,"no es divisible entre 5");
}