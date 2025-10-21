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
let promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (input === "Hola") resolve("Hola, cómo estás?");
        else reject("Error: se tiene que saludar, primero!")
    }, 2000)
});

// 4. Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a
// esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest
// resultat a la consola.

const printPromise = async (promise) => {
    let result = await promise;
    console.log(result);
};
printPromise(promesa);

// 5. Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi
// qualsevol possible error utilitzant un bloc try/catch.

const printPromise2 = async (promise) => {
    try {
        let result = await promise;
        console.log(result);
    }
    catch (error) { console.error(error) }
};