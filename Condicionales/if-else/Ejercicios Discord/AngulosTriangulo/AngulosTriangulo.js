/*Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden 
a un triángulo o no. */

let anguloUno = parseFloat(prompt("Digite el primer angulo"));
let anguloDos = parseFloat(prompt("Digite el segundo angulo"));
let anguloTres = parseFloat(prompt("Digite el tercer angulo"));
let resultado = anguloUno+anguloDos+anguloTres;

if (resultado == 180) {
    console.log("Los angulos ingresados si corresponden con los de un triangulo");
}
else {
    console.log("Los angulos ingresados no corresponden con los de un triangulo");
}