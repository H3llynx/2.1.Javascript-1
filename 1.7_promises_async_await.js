// 1. Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que
// retorni la cadena de text 'Hola, món'.

let promesa = new Promise((resolve, _reject) => {
    setTimeout(() => resolve("Hola, món"), 2000);
});