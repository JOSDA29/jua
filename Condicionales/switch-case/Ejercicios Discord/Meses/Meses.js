/*Dado un número del 1 al 12, escribir el nombre del mes correspondiente.*/

let numero = parseInt(prompt("Digite un numero del 1 al 12 para saber al mes al que pertenece"));

switch (numero) {
    case 1:
        console.log(numero,"pertenece a Enero");
        break;
    case 2:
        console.log(numero,"pertenece a Febrero");
        break;
    case 3:
        console.log(numero,"pertenece a Marzo");
        break;
    case 4:
        console.log(numero,"pertenece a Abril");
        break;
    case 5:
        console.log(numero,"pertenece a Mayo");
        break;
    case 6:
        console.log(numero,"pertenece a Junio");
        break;
    case 7:
        console.log(numero,"pertenece a Julio");
        break;
    case 8:
        console.log(numero,"pertenece a Agosto");
        break;
    case 9:
        console.log(numero,"pertenece a Septiembre");
        break;
    case 10:
        console.log(numero,"pertenece a Octubre");
        break;
    case 11:
        console.log(numero,"pertenece a Noviembre");
        break;
    case 12:
        console.log(numero,"pertenece a Diciembre");
        break;
    default:
        console.log(numero,"No pertence a ningun mes");
        break;
};
