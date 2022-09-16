// Hot Potato = Batata quente fila circular

//function hotPotato(elementsList, num) {
//   const queue = new Queue(); // {1}
//   const elimitatedList = [];
//    for (let i = 0; i < elementsList.length; i++) {
//    queue.enqueue(elementsList[i]); // {2}
//   }
//   while (queue.size() > 1) {
//   for (let i = 0; i < num; i++) {
//    queue.enqueue(queue.dequeue()); // {3}
//    }
//    elimitatedList.push(queue.dequeue()); // {4}
//    }
//   return {
//    eliminated: elimitatedList,
//    winner: queue.dequeue() // {5}
//    };
//}

const { hotPotato } = PacktDataStructuresAlgorithms;
const { palindromeChecker } = PacktDataStructuresAlgorithms;



const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);

result.eliminated.forEach(name => {
  console.log(`${name} was eliminated from the Hot Potato game.`);
});

console.log(`The winner is: ${result.winner}`);

// Camila was eliminated from the Hot Potato game.
// Jack was eliminated from the Hot Potato game.
// Carl was eliminated from the Hot Potato game.
// Ingrid was eliminated from the Hot Potato game.
// The winner is: John

//Palíndromo = é uma palavra, frase, número ou outra sequência de caracteres que é lido igualmente de trás para frente ou de frente para trás

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));