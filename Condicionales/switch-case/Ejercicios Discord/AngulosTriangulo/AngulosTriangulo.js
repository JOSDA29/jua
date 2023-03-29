/*Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
triángulo o no.*/

let anguloUno = parseFloat(prompt("Ingrese el primer angulo"));
let anguloDos = parseFloat(prompt("Ingrese el segundo angulo"));
let anguloTres = parseFloat(prompt("Ingrese el tercer angulo"));
let suma = anguloUno+anguloDos+anguloTres;
let resultado = suma == 180;

switch (resultado) {
    case true:
        console.log("Los angulos si corresponden a los de un triangulo");
        break;
    default: 
        console.log("Los angulos no corresponden a los de un triangulo");
        break;
};