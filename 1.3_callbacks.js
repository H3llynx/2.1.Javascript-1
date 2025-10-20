// 1. Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres:
// un nombre i una funció de callback. La funció processar ha d'invocar la funció
// de callback, passant el nombre com a paràmetre.

const myCallback = (num) => `I have processed ${num}`;
const processar = (num, callback) => callback(num);