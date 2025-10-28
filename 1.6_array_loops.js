// 1. forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola:
let noms = ['Anna', 'Bernat', 'Clara'];
noms.forEach(nom => console.log(nom)); // prints each name in a separate line




// 2. for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la
// consola.

for (let nom of noms) {
    console.log(nom); // 'Anna', 'Bernat', 'Clara'
}




// 3. filter: Teniu una array de números. Utilitza filter per a crear una nova array que només
// contingui els números parells.

let numeros = [1, 2, 3, 4, 5, 6];
const numeros2 = numeros.filter(n => n % 2 === 0);

console.log(numeros2) // [ 2, 4, 6 ]




// 4. for-in: Teniu un objecte amb parells clau-valor:
let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };
// Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.
for (let item in obj) {
    console.log(item, obj[item]); // [ 'nom', 'Ona' ], [ 'edat', 25 ], [ 'ciutat', 'Barcelona' ]
}





// 5. for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a 
// la consola els números fins a trobar el número 5, llavors atura el bucle:

for (let n of numeros) {
    if (n > 5) break;
    else console.log(n); // 1, 2, 3, 4, 5
}





// 6. for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de
// l'array i la seva posició (index):

noms = ['Anna', 'Bernat', 'Clara'];

for (let [index, nom] of noms.entries()) {
    console.log(index, nom) // [ 0, 'Anna' ], [ 1, 'Bernat' ], [ 2, 'Clara' ]
};