/*Crea un programa que muestre un menú con varias opciones y permita al usuario
seleccionar una de ellas. Utiliza switch para ejecutar una acción diferente en función de la
opción seleccionada por el usuario.*/

let menu = prompt("¿Desea conocer nuestro menu de hamburguesas?, digite si o no")

if (menu == "si" ) {
    let catalogo = parseInt(prompt("Fantastico, por favor digite un numero del 1 al 6 para ver ñas opciones disponible"));
    switch (catalogo) {
        case 1:
            console.log("César Burger: Hamburguesa de pollo empanado en pan rústico, lechuga, manzana, jamón york y salsa césar.");
            break;
        case 2:
            console.log("Ribs Burger: Hamburguesa de carne de costillar desmechada, en pan de mollete, con beicon, lechuga, tomate y cebolla frita, con queso brie y mozzarella y salsa Barbacoa.");
            break;
        case 3:
            console.log("Tex Mex Burger: Hamburguesa de ternera en pan rústico, con jalapeños, tomate y aguacate, queso cheddar y salsa Jack Daniels");
            break;
        case 4:
            console.log("Cubana Burger: Hamburguesa de carne de cerdo, en pan brioche, con mozzarella, lechuga, tomate y huevo frito, y salsa guacamole.");
            break;
        case 5:
            console.log("Silvestre Burger: Hamburguesa de ternera, en pan clásico, con beicon y queso camembert con salsa de setas.");
            break;
        case 6:
            console.log("Ibérica Burger: Hamburguesa de Cerdo en pan brioche, con jamón, tomate y lechuga, queso gouda y salsa de queso azul.");
            break;
        default:
            console.log("No se ingreso ninguno del 1 al 6");
            break;
    }
}
else {
    console.log("Esta bien, en otro momento observaras nuestro fantastico y exquisito menu");
}