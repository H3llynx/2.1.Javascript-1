// 1. Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com
// a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot
// conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no,
// ha de retornar 'No pots conduir'.

const potConduir = (age) => age >= 18 ? "Pots conduir" : "No pots conduir"

console.log(potConduir(16)) // No pots conduir
console.log(potConduir(18)) // Pots conduir




// 2. Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador
// ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran.
// Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més
// gran'.

const greatestNumber = (num1, num2) => {
    return (num1 > num2) ? `${num1} és més gran` : (num2 > num1) ? `${num2} és més gran` : `${num1} = ${num2}`
}

console.log(greatestNumber(4, 2)); // 4 és més gran
console.log(greatestNumber(0, 6)); // 6 es més gran
console.log(greatestNumber(0, 0)); // 0 = 0




// 3.1 Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços
// d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

let num = -4;
result = (num > 0) ? "positiu" : (num < 0) ? "negatiu" : "zero";

console.log(result) // negatiu




// 3.2 Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres
// paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.

const trobarMaxim = (a, b, c) => {
    let maxValue;
    maxValue = (a > b && a > c) ? a : (b > a && b > c) ? b : c
    return maxValue
}

console.log(trobarMaxim(90, -5, 89.99)) // 90




// 4. Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un
// array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle,
// utilitza l'operador ternari per a determinar si cada número és parell o imparell.

const ParOImpar = (arr) => {
    for (let num of arr) {
        console.log(num % 2 === 0 ? `${num} : parell` : `${num} : imparell`);
    }
}

const array = [2, 3, 9, 78, 42];
ParOImpar(array)

// '2 : parell'
// '3 : imparell'
// '9 : imparell'
// '78 : parell'
// '42 : parell'