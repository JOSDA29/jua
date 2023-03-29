/*Dado un número que indica el precio de un producto y otro número que indica el porcentaje de descuento,
 calcular el precio final después del descuento.*/

let precioProducto = parseInt(prompt("Digite el precio del producto (Por favor, digitelo SIN puntos,comas,comillas,etc)"));
let descuentoProducto = parseFloat(prompt("Digite el porcentaje del descuento (Por favor, digitelo sin el %)"));
let porcentaje = descuentoProducto/100;
let descuento = precioProducto-precioProducto*porcentaje;

if (descuentoProducto > 0) {
    console.log("El precio actual de su producto es",precioProducto,", con un descuento del",descuentoProducto,"%, su precio final es",descuento);
}
else {
    console.log("No es posible realizar el descuento, ya que no se ingreso el porcentaje del descuento");
}