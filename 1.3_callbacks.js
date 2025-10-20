// 1. Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres:
// un nombre i una funció de callback. La funció processar ha d'invocar la funció
// de callback, passant el nombre com a paràmetre.

const myCallback = (num) => `I have processed ${num}`;
const processar = (num, callback) => callback(num);
// --> console.log(processar(4,myCallback))

// 2. Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti
// tres paràmetres: dos nombres i una funció de callback. La funció calculadora
// ha d'invocar la funció de callback amb els dos nombres com a paràmetres.
// Després, crida calculadora amb una funció que faci la suma dels dos nombres.

const add = (num1, num2) => num1 + num2
const calculadora = (num1, num2, add) => add(num1, num2)

// 3. Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar
// que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar
// 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

const saludar = (name) => `Hola ${name}`;
const esperarISaludar = (name, saludar) => setTimeout(() => {
    console.log(saludar(name));
}, 2000);

