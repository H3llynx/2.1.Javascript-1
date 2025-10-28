// 1. Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que
// retorni la cadena de text 'Hola, món'.

let promesa = new Promise((resolve, _reject) => {
    setTimeout(() => resolve("Hola, món"), 2000);
});




// 2. Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea
// un .then que imprimeixi el resultat a la consola.

promesa.then(result => console.log(result)); // 'Hola, món'




// 3. Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és
// igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

let input = "Hola"; // tested with a real prompt in index.html
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

printPromise(promesa); // 'Hola, món'




// 5. Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi
// qualsevol possible error utilitzant un bloc try/catch.

const printPromise2 = async (promise) => {
    try {
        let result = await promise;
        console.log(result);
    }
    catch (error) { console.error(error) }
};

printPromise2(promesa); // 'Hola, món'




// 6. Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament.
// Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els
// resultats a la consola.

const promise1 = new Promise((resolve, _reject) => {
    setTimeout(() => resolve("This is my first promise"), 200)
});

const promise2 = new Promise((resolve, _reject) => {
    setTimeout(() => resolve("This is my second promise"), 3000)
});

Promise.all([promise1, promise2]).then((result) => {
    console.log(result); // [ 'This is my first promise', 'This is my second promise' ]
});