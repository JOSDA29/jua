/*En una empresa de desarrollo de software se realizan un aumento salarial
para el nuevo año según la categoría del empleado. Programe un algoritmo
que determine el salario que debe recibir una persona el próximo año según
su categoría. Tenga en cuenta lo siguiente:
● La categoría 1 tendrá un aumento salarial del 15%.
● La categoría 2 tendrá un aumento salarial del 25%.
● La categoría 3 tendrá un aumento salarial del 45%.*/

let salario = parseFloat(prompt("Digite su salario para saber cuanto aumento"));
let categoria = prompt("Digite una de las siguientes categorias a la cual pertence: categoria1, categoria2, categoria3");

switch (categoria) {
  case "categoria1":
    console.log("Su aumento es", salario+salario*0.15);
    break;
  case "categoria2":
    console.log("Su aumento es", salario+salario*0.25);
    break;
  case "categoria3":
    console.log("Su aumento es", salario+salario*0.45);
    break;
  default:
    console.log("No se digite ninguna de las categorias anteriores");
    break;
}