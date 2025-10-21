// 1. forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola:
let noms = ['Anna', 'Bernat', 'Clara'];
noms.forEach(nom => console.log(nom));

// 2. for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la
// consola.

for (let nom of noms) {
    console.log(nom);
}

// 3. filter: Teniu una array de números. Utilitza filter per a crear una nova array que només
// contingui els números parells.

let numeros = [1, 2, 3, 4, 5, 6];
const numeros2 = numeros.filter(n => n % 2 === 0);