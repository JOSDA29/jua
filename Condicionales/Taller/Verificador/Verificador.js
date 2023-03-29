/*Crear un programa en Javascript que verifique si una cadena de texto contiene la palabra
"ADSO" y la palabra "desarrolladores" en ella*/

let mensaje = ("Ustedes son aprendices desarrolladores de software por pertenecer a la formacion ADSO");
console.log(mensaje);
console.log("El mensaje incluye ADSO",mensaje.includes("ADSO"));
console.log("El mensaje incluye desarrolladores",mensaje.includes("desarrolladores"));
console.log("EL mensaje incluye el numero de la ficha",mensaje.includes("ficha"));