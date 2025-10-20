// 1. Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres:
// un nombre i una funció de callback. La funció processar ha d'invocar la funció
// de callback, passant el nombre com a paràmetre.

const myCallback = (num) => `I have processed ${num}`;
const processar = (num, callback) => callback(num);

// 2. Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti
// tres paràmetres: dos nombres i una funció de callback. La funció calculadora
// ha d'invocar la funció de callback amb els dos nombres com a paràmetres.
// Després, crida calculadora amb una funció que faci la suma dels dos nombres.