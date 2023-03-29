/*Crear un programa rama en Javascript que verifique si un año es bisiesto.*/

let ano = parseFloat(prompt("Digite un año para saber si es bisisesto"))
let validez = ano%4 == 0;

switch (validez) {
    case true:
        console.log("El año",ano,"si es un año bisisesto");
        break;

    default:
        console.log("El año",ano,"no es un año bisisesto");
        break;
}
