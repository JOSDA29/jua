/*Cree un programa que muestre si un numero a es multiplo de un numero b*/

let numeroUno = parseInt(prompt("Digite cualquier numero"));
let numeroDos = parseInt(prompt("Digite cualquier numero"));

if (numeroUno%numeroDos == 0) {
    console.log(numeroUno,"es multiplo de",numeroDos);
}
else {
    console.log(numeroUno,"no es multiplo de",numeroDos);
};
