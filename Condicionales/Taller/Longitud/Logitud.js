/*Crea un programa que convierta una longitud en una unidad de medida a otra. El programa
debe trabajar con el valor de la longitud, la unidad de medida original y la unidad de medida
de destino. Utiliza switch-case para determinar la unidad de medida original y la unidad de
medida de destino y realizar la conversión correspondiente*/

let metros = parseFloat(prompt("Digite la longitud, (recuerde que el sistema la tomara en metros)"))
let unidadesDeMedida = prompt("Digite la medida a la cual desea pasar, las medidas disponibles son: km, hm, dam, dm, cm, mm ")

switch (unidadesDeMedida) {
    case "km":
        let km = metros/1000;
        console.log(metros,"m son",km,"km");
        break;
    case "hm":
        let hm = metros/100;
        console.log(metros,"m son",hm,"hm");
        break;
    case "dam":
        let dam = metros/10;
        console.log(metros,"m son",dam,"dam");
        break;
    case "dm":
        let dm = metros*10;
        console.log(metros,"m son",dm,"dm");
        break;
    case "cm":
        let cm = metros*100;
        console.log(metros,"m son",cm,"cm");
        break;
    case "mm":
        let mm = metros*1000;
        console.log(metros,"m son",mm,"mm");
        break;
    default:
        console.log("No se ingreso ninguna de las medidad mencionadas");
        break;
};