/* Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
también se debe mostrar al usuario.*/

let numeroUno = parseInt(prompt("Digite cualquier numero"));
let numeroDos = parseInt(prompt("Digite cualquier numero"));

if (numeroUno == numeroDos) {
    console.log(numeroUno,"y",numeroDos,"son iguales")
}
else if (numeroUno > numeroDos) {
    console.log(numeroUno,"es mayor que",numeroDos);
}
else {
    console.log(numeroDos,"es mayor que",numeroUno);
};

