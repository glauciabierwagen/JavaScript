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


//* ********* Using the fill method
console.log('Using the fill method')

numbersCopy.fill(0); //All numbers of the array are filled with 0
console.log('numbersCopy.fill(0)', numbersCopy); //Output ([0,0,0,0,0,0])

numbersCopy.fill(2, 1); //All positions will have the value 2 from position 1
console.log('numbersCopy.fill(2, 1)', numbersCopy); //Output ([0,2,2,2,2,2])

numbersCopy.fill(1, 3, 5); //preencheremos o array com o valor 1, do índice 3 ao índice 5 (não inclusivo)
console.log('numbersCopy.fill(1, 3, 5)', numbersCopy); //Output [0,2,2,1,1,2]

// O código a seguir  criará um array de tamanho 6 e todos os seus valores serão iguais a 1
let ones = Array(6).fill(1);
console.log(ones);

//* ********* Using the copyWithin method
//O método copyWithin copia uma sequência de valores do array para a posição de um índice de início.

let copyArray = [1, 2, 3, 4, 5, 6];
console.log('copyArray', copyArray);

copyArray.copyWithin(0, 3);//copiar os valores 4, 5 e 6 para as primeiras três posições do array
console.log('copyArray.copyWithin(0,3)', copyArray); // Output [4,5,6,4,5,6]

copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(1, 3, 5); // Copiar os valores 4 e 5 (as posições 3 e 4) para as posições 1 e 2
console.log('copyArray.copyWithin(1, 3, 5)', copyArray);

//Ordening elements

let numbersord = [1, 2, 3, 4, 5, 6];
numbersord.reverse();
console.log(numbersord);
numbers.sort(); //ordem lexicográfica todos os elementos são strings
console.log(numbersord);
numbers.sort((a, b) => a - b);
console.log(numbersord);

function compare(a, b) {
  if (a < b) {
  return -1;
  
  }
  if (a > b) {
  return 1;
  }
  // a deve ser igual a b
  return 0;
  }
  numbers.sort(compare);
  console.log(numbersord);

  //Personalized ordenation

  const friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 }, // vírgula no final: ES2017
    ];
    function comparePerson(a, b) {
    if (a.age < b.age) {
    return -1;
    }
    if (a.age > b.age) {
    return 1;
    }
    return 0;
    }
    console.log(friends.sort(comparePerson));

// O JavaScript considera as letras diferentes, código para ignorar a diferenca maiúscula e minúscula
let names = ['Ana', 'ana', 'john', 'John']; // inicia o array com o estado original
console.log(names.sort((a, b) => {
if (a.toLowerCase() < b.toLowerCase()) {
return -1;
}
if (a.toLowerCase() > b.toLowerCase()) {
return 1;
}
return 0;
}));
//minúscula no início
names.sort((a,b) => a.localeCompare(b));
console.log(names);

const names2 = ['Maéve', 'Maeve'];
console.log(names2.sort((a, b) => a.localeCompare(b))); //Output Maeve, Maéve



//https://github.com/PacktPublishing/Learning-JavaScript-Data-Structures-and-Algorithms-Third-Edition/blob/master/LearningJavaScriptDataStructuresandAlgorithmsThirdEdition_Code/examples/chapter03/06-ES2015Methods.js
