/*Programe un algoritmo que diga si un estudiante ganó una asignatura según
su calificación. Para ganar la asignatura se necesita de una calificación mayor
o igual a 3.0.*/

let nota = parseFloat(prompt("Digite la nota para saber si aprueba o no la asignatura"));

if (nota < 3) {
    console.log("Su nota es de",nota,"por ende reprueba la asignatura");
}
else {
    console.log("Su nota es de",nota,"por ende aprueba la asignatura");
};