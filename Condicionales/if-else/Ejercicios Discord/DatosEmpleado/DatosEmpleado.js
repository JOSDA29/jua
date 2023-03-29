/*Una entidad otorga subsidios de vivienda a sus empleados siempre y cuando cumplan con ciertos criterios.
 Si un empleado es de un estrato socio-económico menor al estrato  4 y tiene por lo menos 8 años de antigüedad
 en la entidad, entonces el empleado tiene derecho a un subsidio de vivienda, de lo contrario, no. 
 Teniendo en cuenta las condiciones anteriores, cree en Javascript un programa que reciba por teclado 
 el nombre del empleado, luego, que reciba su estrato socio-económico (debe estar ubicado entre 1 y 6), 
 después que reciba por teclado su antigüedad en años en la entidad y por último muestre si el empleado tiene 
 derecho al subsidio o no*/

  let nombre = prompt("Por favor, digite su nombre");
  let estrato = parseInt(prompt("¿Cual es su estrato socio-economico? (recuerde que los estratos deben estar ubicados entre 1 y 6)"));
  let anos = parseInt(prompt("¿Por cuantos años ha pertenecido a la entidad?"));
  
  if (estrato >= 4 && anos >= 8) {
    console.log(nombre,"si tienes derecho a subsidio");
  }
  else {
    console.log(nombre,"no tienes derecho a subsidio");
  };
