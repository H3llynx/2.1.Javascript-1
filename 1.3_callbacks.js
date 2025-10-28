// 1. Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres:
// un nombre i una funció de callback. La funció processar ha d'invocar la funció
// de callback, passant el nombre com a paràmetre.

const myCallback = (num) => console.log(`I have processed ${num}`);
const processar = (num, callback) => callback(num);

processar(4, myCallback) // I have processed 4




// 2. Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti
// tres paràmetres: dos nombres i una funció de callback. La funció calculadora
// ha d'invocar la funció de callback amb els dos nombres com a paràmetres.
// Després, crida calculadora amb una funció que faci la suma dels dos nombres.

const add = (num1, num2) => num1 + num2
const calculadora = (num1, num2, add) => add(num1, num2)

console.log(calculadora(11, 5, add)) // 16




// 3. Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar
// que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar
// 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

const saludar = (name) => `Hola ${name}`;
const esperarISaludar = (name, callback) => setTimeout(() => {
    console.log(callback(name));
}, 2000);

esperarISaludar("Sasha", saludar) // Hola Sasha




// 4. Callbacks amb arrays: Escriu una funció processarElements que accepti dos
// paràmetres: un array i una funció de callback. La funció processarElements ha
// d'invocar la funció de callback per cada element de l'array.

const indexing = (index, item) => {
    console.log(`${index + 1} : ${item}`);
};

const processarElements = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(i, arr[i]);
    }
}

let array = ["this", "is", 1, "test", "array"]
processarElements(array, indexing)
// '1 : this'
// '2 : is'
// '3 : 1'
// '4 : test'
// '5 : array'




// 5. Escriu una funció processarCadena que accepti dos paràmetres: una cadena de
// caràcters i una funció de callback. La funció processarCadena ha de convertir la
// cadena a majúscules i llavors invocar la funció de callback amb la cadena
// transformada.

const print = (str) => {
    console.log(str);
}
const procesarCadena = (str, callback) => {
    str = str.toUpperCase();
    callback(str);
}

let str = "probando la funcion"
procesarCadena(str, print) // PROBANDO LA FUNCION