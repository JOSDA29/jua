/*Invente un programa con contexto donde se use condicionales y el operador negación
para resolver un problema.
● Cree un programa que verifique si el color ingresado por el usuario es un color primario o no.*/

let color = prompt("Digite un color primario")

if (!(color == "azul"|| color == "amarillo"|| color == "rojo")) {
    console.log(color,"no es un color primario");
}
else {
    console.log(color,"si es un color primario");
};