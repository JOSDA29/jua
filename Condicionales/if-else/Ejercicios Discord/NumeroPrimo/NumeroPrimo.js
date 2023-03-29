/*Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no.*/

let numero = parseInt(prompt("Digite cualquier numero"));

if (numero < 1 || numero > 15) {
    console.log("No se ingreso un numero entre 1 y 15");
}

if (numero == 2 || numero == 3 || numero == 5 || numero == 7 || numero == 11 || numero == 13) {
    console.log(numero,"es un numero primo");
}

if (numero == 1 || numero == 4 || numero == 6 || numero == 8 || numero == 9 || numero == 10 || numero == 12 || numero == 14 || numero == 15) {
    console.log(numero,"no es un numero primo");
}

