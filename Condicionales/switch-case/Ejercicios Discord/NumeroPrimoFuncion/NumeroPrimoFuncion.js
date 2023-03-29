/*Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no.*/

function  revisarNumeros (params) {
    let numero = Number(parseFloat(prompt("Digite cualquier numero")))
    switch (true) {
        case numero<0 || numero>15:
            console.log("No ingreso un numero entre 1 y 15, porfavo ingrese otros");
            revisarNumeros();
            break;
        case 2:
        case 3:
        case 5:
        case 7:
        case 11:
        case 13:
            console.log(numero,"Es un numero primo");
        default:
            console.log(numero,"No es un numero primo")
            break;
    }
}
revisarNumeros();