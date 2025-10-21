// 1. Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que
// retorni la cadena de text 'Hola, món'.

let promesa = new Promise((resolve, _reject) => {
    setTimeout(() => resolve("Hola, món"), 2000);
});

// 2. Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea
// un .then que imprimeixi el resultat a la consola.

promesa.then(result => console.log(result));