/* Un usuario ingresa una contraseña y deseamos verificar si es válida. La contraseña es
válida si tiene al menos 8 caracteres y un máximo de 15 caracteres. La contraseña debe
contener un espacio. Si la contraseña tiene un formato válido, se le debe mostrar al usuario,
sino, también se le debe mostrar un mensaje. Cree en Javascript un programa que cumpla
con los requerimientos anteriores.*/

let contrasena= prompt ("Por favor, digite su contraseña, recuerde que esta debe tener un minimo de 8 caracteres y un máximo de 15 caracteres, ademas esta debe contener un espacio.");

if (contrasena.includes(" ") && (length >= 8) || (length <= 15)) {
console.log("Su contraseña es válida");
}
else{
    console.log("Su contraseña no es válida ya que no cumple con los requerimientso solicitados");
};