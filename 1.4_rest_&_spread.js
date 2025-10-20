// 1. Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza
// l'operador spread per a crear una tercera array que contingui tots els elements
// de array1 i array2.

const array1 = ["this", "is", "my", 1, "st", "array"]
const array2 = [6, 9, 11, 23, 60]
const array3 = [...array1, ...array2]

// 2. Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest
// per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.
const suma = (...numbers) => {
    let total = 0
    for (const n of numbers) {
        total += n;
    }
    return total;
}
