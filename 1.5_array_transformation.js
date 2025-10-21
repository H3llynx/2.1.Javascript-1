// 1. Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el
// quadrat de cada número.

const initialArray = [1, 2, 3, 4];
const newArray = initialArray.map(i => i * i);

// 2. Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui
// els números parells.

const newArray2 = initialArray.filter(i => i % 2 === 0);

// 3. Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el
// primer número que és major a 10.

const array = [1, 10, 8, 11]
const firstNumOverTen = array.find(n => n > 10);