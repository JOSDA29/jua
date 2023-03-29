/*Cree un programa que lea la edad de un usuario e imprima un mensaje que diga si el usuario es mayor de
edad o no.*/

let edad = parseInt(prompt("¿Cual es su edad?"))

if (edad >= 18) {
    console.log("Usted tiene",edad,"por tanto es mayor de edad");
}
else {
    console.log("Usted tiene",edad,"por tanto es menor de edad");
}