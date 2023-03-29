/**/

let estadoCivil = prompt("Ingrese estado civil");
let casado = estadoCivil == "casado";

switch (casado) {
  case true:
    console.log("Felicidades estas casado");
    break;
  default:
    console.log("Me alegro de que no estes casado");
    break;
}