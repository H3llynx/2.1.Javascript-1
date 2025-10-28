// 1. Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el
// quadrat de cada número.

const initialArray = [1, 2, 3, 4];
const newArray = initialArray.map(i => i * i);

console.log(newArray) // [ 1, 4, 9, 16 ]




// 2. Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui
// els números parells.

const newArray2 = initialArray.filter(i => i % 2 === 0);

console.log(newArray2) // [ 2, 4 ]




// 3. Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el
// primer número que és major a 10.

const array = [1, 10, 8, 11];
const firstNumOverTen = array.find(n => n > 10);


console.log(firstNumOverTen) // 11




// 4. Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a
// calcular la suma total dels números.

const arr = [13, 7, 8, 21];
const sum = arr.reduce((total, num) => total + num);

console.log(sum) // 49




// 5. Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola 
// línia que faci el següent:
//- Filtra els nombres majors o iguals a 10.
//- Multiplica cada nombre filtrat per 2.
//- Calcula la suma dels nombres filtrats i multiplicats per 2.
//- La funció ha de retornar el resultat de la suma.

const filterAndCalculate = (arr) => arr.filter(n => n >= 10).map(n => n * 2).reduce((total, num) => total + num);

console.log(filterAndCalculate([1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9])) // 130




// 6. Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array
// [11, 12, 13, 14] són majors que 10, respectivament

const arrayOfNumbers = [11, 12, 13, 14];
arrayOfNumbers.some(n => n > 10); // returns true
arrayOfNumbers.every(n => n > 10); // also returns true

