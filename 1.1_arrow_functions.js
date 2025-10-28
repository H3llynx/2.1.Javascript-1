// 1. Conversió de funcions: Tens una funció add que accepta dos paràmetres i
// retorna la seva suma. Converteix-la en una funció de fletxa.
// Per exemple: function add(a, b) {return a + b;}.

const add = (a, b) => a + b

console.log(add(5, 3)); // 8
console.log(add(10, 20)); // 30




// 2. Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada
// randomNumber que no necessiti paràmetres i que retorni un número aleatori
// entre 0 i 100.

const randomNumber = () => Math.floor(Math.random() * 101);

console.log(randomNumber()); // Shows a random number between 0 and 100




// 3. Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui
// una propietat name i una funció greet que utilitzi una funció de fletxa. La
// funció ha d'imprimir una salutació que inclogui el nom de la persona.
// Per exemple: console.log(Hola, ${this.name});.

class Person {
    constructor(name) {
        this.name = name
    }
    greet() {
        return `Hola, ${this.name}`;
    }
}

let helene = new Person("Helene");
console.log(helene.greet()) // Hola, Helene




// 4. Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que
// accepti un array de números i utilitzi un loop for per imprimir cada número
// a la consola utilitzant una funció de fletxa.

const printNumbers = (arr) => {
    arr.forEach(num => console.log(num))
}

let array = [4, 3, 2, 1, 0]
printNumbers(array); // Prints each element of the array in a separate line




// 5. Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi
// un missatge a la consola després d'esperar 3 segons.

const delayedMsg = (msg) => {
    setTimeout(() => {
        console.log(msg);
    }, 3000)
}

delayedMsg("I am late") // I am late