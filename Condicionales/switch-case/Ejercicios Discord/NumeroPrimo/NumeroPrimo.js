/*Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no.*/

let numero = parseFloat(prompt("Ingrese un numero entre 1 y 15"));

switch (numero) {
    case 2:
    case 3:
    case 5:
    case 7:
    case 11:
    case 13:
        console.log(numero,"Es un numero primo");
        break;
    case 1:
    case 4:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 12:
    case 14:
    case 15:
        console.log(numero,"No es un numero primo");
        break;
    default:
        console.log("No se ingreso un numero entre 1 y 15");
        break;
}