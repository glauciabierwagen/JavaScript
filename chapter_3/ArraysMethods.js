// @ts-check

//* ************** Joining multiple arrays. Adicionando uma array com outra através do concat

const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log('zero', zero);
console.log('positiveNumbers', positiveNumbers);
console.log('negativeNumbers', negativeNumbers);
console.log('negativeNumbers.concat(zero, positiveNumbers)', numbers);

//Iteration (Repeticão)

function isEven(x) {
    // devolve true se x for múltiplo de 2.
    console.log(x);
    return x % 2 === 0 ? true : false;
    }
    let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    console.log('numbers', numbers2);

    //console.log(x);

//Every method - repeat the numbers until return the false value (in this case false is a odd number)

numbers2.every(isEven);
console.log('numbers.every(isEven)', numbers2.every(isEven));

//Some method - repeat the numbers until return the true value (in this case true is a even number)

numbers2.some(isEven);
console.log('numbers.someisEven)', numbers2.some(isEven));

//ForEach 
// numbers.forEach(function(x) {
 //   console.log(x % 2 == 0);
 // }); */ // ES5 sintax for function below

 numbers2.forEach(x => console.log('numbers.forEach: ${x} % 2 === 0', x % 2 === 0));

 //Map method - map out the numbers

 const myMap = numbers.map(isEven);
console.log('numbers.map(isEven)', numbers2.map(isEven));

//Filter - in this case filter the even numbers

const evenNumbers = numbers.filter(isEven);
console.log('numbers.filter(isEven)', numbers2.filter(isEven));
//Output [2, 4, 6, 8, 10, 12, 14].

/* console.log('numbers.reduce',
  numbers.reduce(function(previous, current, index) {
    return previous + current;
  })
); */ // ES5 sintax for function below
// Valor de soma acumulado

console.log('numbers.reduce', numbers2.reduce((previous, current) => previous + current));
// Output 120

//For of
//* ********* using for..of loop
for (const n of numbers2) {
    console.log(`for..of loop: ${n} % 2 === 0`, n % 2 === 0 ? 'even' : 'odd');
}

//* ********* Using the new ES6 iterator (@@iterator)
console.log('Using the new ES6 iterator (@@iterator');

let iterator = numbers2[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
// Output 1, 2, 3, 4, 5, 6 from variable numbers2

// or use code below
iterator = numbers2[Symbol.iterator]();
for (const n of iterator) {
    console.log(`${n} of iterator`, n);
}

// Oututput 1 of iterator 1 until number 15 of iterator 15

//* ********* Array entries, keys and values
let aEntries = numbers2.entries(); //obtém um iterador de chave/valor
console.log(aEntries.next().value); // [0, 1] - posição 0, valor 1
console.log('aEntries.next().value', aEntries.next().value); // [1, 2] - position 1, value 2
console.log('aEntries.next().value', aEntries.next().value); // [2, 3] - position 2, value 3

// or use code below

aEntries = numbers2.entries();
for (const n of aEntries) {
  console.log(n);
}

//Arrays Keys

const aKeys = numbers2.keys(); //obtém um iterador de chaves
console.log(aKeys.next()); // {value: 0, done: false } done false means iterator has more values
console.log(aKeys.next());  // {value: 1, done: false }
console.log(aKeys.next());  // {value: 2, done: false }

console.log('Array.values - Only Edge and Safari - Oct 2017');
const aValues = numbers2.values();
console.log(aValues.next()); // {value: 1, done: false } done false means iterator has more values
console.log(aValues.next()); // {value: 2, done: false }
console.log(aValues.next()); // {value: 3, done: false }

//* ********* Using the from method
console.log('Using the from methodo');
const evens = Array.from(numbers2, x => x % 2 === 0);
console.log('Array.from(numbers, x => x % 2 === 0', evens);

const numbers3 = Array.from(numbers2);
console.log('Array.from(numbers)', numbers3);

//* ********* Using Array.of

const number4 = Array.of(1); //similar to let numbers4 = [1];
console.log('Array.of(1)', number4);
const number5 = Array.of(1, 2, 3, 4, 5, 6); //similar to let number5 = [1, 2, 3, 4, 5, 6];
console.log('Array.of(1, 2, 3, 4, 5, 6)', number5);
const numbersCopy = Array.of(...number5); //Copy of an an existent array. In this case number5
console.log('Array.of(...number5)', numbersCopy);




//https://github.com/PacktPublishing/Learning-JavaScript-Data-Structures-and-Algorithms-Third-Edition/blob/master/LearningJavaScriptDataStructuresandAlgorithmsThirdEdition_Code/examples/chapter03/06-ES2015Methods.js
