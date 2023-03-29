/*cree un programa que pida el sisben al usuario y le diga si tiene derecho a subsidio o no ,
si el sisben es 1, 2 0 3, tiene derecho, sino no*/

let nivelSisben = parseInt(prompt("Digite su nivel del sisben para saber si tiene derecho a subsidio"));

switch (nivelSisben) {
  case 1:
    console.log("Tiene derecho a subsidio");
    break;
  case 2:
    console.log("Tiene derecho a subsidio");
    break;
  case 3:
    console.log("Tiene derecho a subsidio");
    break;
  default:
    console.log("No tiene derecho a subsidio");
    break;
};