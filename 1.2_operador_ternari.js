// 1. Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com
// a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot
// conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no,
// ha de retornar 'No pots conduir'.

const potConduir = (age) => age >= 18 ? "Pots conduir" : "No pots conduir"

// 2. Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador
// ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran.
// Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més
// gran'.

const greatestNumber = (num1, num2) => {
    if (num1 > num2) return `${num1} és més gran`;
    else if (num2 > num1) return `${num2} és més gran`;
    else return;
}