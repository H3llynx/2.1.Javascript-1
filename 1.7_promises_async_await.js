// 1. Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que
// retorni la cadena de text 'Hola, món'.

let promesa = new Promise((resolve, _reject) => {
    setTimeout(() => resolve("Hola, món"), 2000);
});

// 2. Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea
// un .then que imprimeixi el resultat a la consola.

promesa.then(result => console.log(result));

// 3. Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és
// igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

let input = prompt("Escribe algo:");
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (input === "Hola") resolve("Hola, cómo estás?");
        else reject("Error: se tiene que saludar, primero!")
    }, 2000)
});

