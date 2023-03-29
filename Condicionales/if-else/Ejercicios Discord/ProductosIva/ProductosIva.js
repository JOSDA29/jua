/*En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz 
no pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
mencionados y muestre si el producto paga IVA o no.*/

let producto = prompt("Digite el nombre de uno de los siguintes productos para saber si este incluye IVA: lentejas, crema, arroz, vino")

if (producto == "lentejas" || producto == "arroz") {
    console.log(producto,"NO paga IVA");
}

else if (producto == "crema" || producto == "vino") {
    console.log(producto,"SI paga IVA");
}

else if (producto != "lentejas" || producto != "crema" || producto != "arroz" || producto != "lentejas") {
    console.log("No se ingreso ninguno de los productos mencionados");
};


