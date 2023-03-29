/*Dado un número del 1 al 12, escribir el nombre del mes correspondiente.*/

let numero = parseInt(prompt("Digite un numero del 1 al 12 para saber al mes al que pertenece"));

if (numero == 1) {
    console.log(numero,"pertenece a Enero");
};

if (numero == 2) {
    console.log(numero,"pertenece a Febrero");
};

if (numero == 3) {
    console.log(numero,"pertenece a Marzo");
};

if (numero == 4) {
    console.log(numero,"pertenece a Abril");
};

if (numero == 5) {
    console.log(numero,"pertenece a Mayo");
};

if (numero == 6) {
    console.log(numero,"pertenece a Junio");
};

if (numero == 7) {
    console.log(numero,"pertenece a Julio");
};

if (numero == 8) {
    console.log(numero,"pertenece a Agosto");
};

if (numero == 9) {
    console.log(numero,"pertenece a Septiembre");
};

if (numero == 10) {
    console.log(numero,"pertenece a Octubre");
};

if (numero == 11) {
    console.log(numero,"pertenece a Noviembre");
};

if (numero == 12) {
    console.log(numero,"pertenece a Diciembre");
};

if (numero <= 0 || numero > 12 ) {
    console.log(numero,"No pertence a ningun mes");
};