// 1. Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza
// l'operador spread per a crear una tercera array que contingui tots els elements
// de array1 i array2.

const array1 = ["this", "is", "my", 1, "st", "array"];
const array2 = [6, 9, 11, 23, 60];
const array3 = [...array1, ...array2];

// 2. Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest
// per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.
const suma = (...numbers) => {
    let total = 0
    for (let n of numbers) {
        total += n;
    }
    return total;
}

// 3. Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon
// objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread.
// Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

const objecte1 = {
    raza: "gato",
    nombre: "Pixie",
    color: "gris"
};

const objecte2 = { ...objecte1 };
objecte2.nombre = "Fidjie";

//console.log(objecte1, objecte2)

// 4. Rest en Destructuring: Crea una array amb diversos elements. Utilitza
// destructuring i l'operador rest per a assignar els primers dos elements a variables,
// i després assignar la resta dels elements a una tercera variable.

let array = ["this", "is", "my", "array", 1, 2, 3];
let [element1, element2, ...rest] = array;

