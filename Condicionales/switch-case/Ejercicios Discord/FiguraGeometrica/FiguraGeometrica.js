/*Dado un string que indica la figura geométrica y dos números, calcular el área correspondiente. 
Las figuras pueden ser "triangulo", "rectangulo" o "circulo".*/

let comprobacion = prompt("Digite el nombre de una de las siguientes figuras: triangulo,rectangulo,circulo")

switch (comprobacion) {
    case "triangulo":
    let baseT = parseFloat(prompt("Digite el valor de la base de su triangulo para saber su area"));
    let alturaT = parseFloat(prompt("Digite el valor de la altura de su triangulo para saber su area"));
    let areaT = baseT*alturaT/2;
    console.log("El area de su triangulo es",areaT);
        break;

    case "rectangulo":
    let baseR = parseFloat(prompt("Digite el valor de la base de su rectangulo para saber su area"));
    let alturaR = parseFloat(prompt("Digite el valor de la altura de su rectangulo para saber su area"));
    let areaR = baseR*alturaR;
    console.log("El area de su triangulo es",areaR);
        break;

    case "circulo":
    const pi = 3.1416
    let radio = parseFloat(prompt("Digite el valor del radio de su circulo para saber su area"));
    let areaC = pi*radio*radio;
    console.log("El area de su circulo es",areaC);
        break;

    default:
    console.log("No se ingreso ningun nombre de las figuras mencionadas");
        break;
}