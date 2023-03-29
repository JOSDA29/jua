/*Crea una aplicación que tenga varios estados y permita al usuario cambiar entre ellos.
Utiliza switch para cambiar el estado actual de la aplicación y ejecutar diferentes acciones en
función del estado actual. Por ejemplo, si la aplicación está en modo "edición", permite al
usuario editar los datos, pero si está en modo "visualización", muestra los datos sin permitir
la edición.*/

let estados = prompt("Digite uno de los siguientes estados: visualizacion,comentario,edicion")

switch (estados) {
    case "visualizacion":
        console.log("Se encuentra en modo visualizacion, no podra editar ni comentar la presentacion");
        break;
    case "comentario":
        console.log("Se encuentra en modo comentario, seleccione donde desea realizar un comentario");        
        break;
    case "edicion":
        console.log("Se encuentra en modo edicion, sientase libre de usar nuestra erramientas");
        break;
    default:
        console.log("No se digito ninguno de los estados mencionados");
        break;
};