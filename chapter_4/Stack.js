// import Stack from './../../src/js/data-structures/stack.js'; // ES2015 modules
// import StackArray from './../../src/js/data-structures/stack-array.js'; // ES2015 modules
// const Stack = require('../../dist/js/data-structures/stack'); // for node
// const Stack = stack; // older browsers - remove from html script import: type="module"

// Stack ou pilha = princípio no qual o topo é o final da pilha, enquanto o início é a base. Como um pilha de livros.

const { Stack } = PacktDataStructuresAlgorithms;

const stack = new Stack(); // new StackArray();

// using WeakMap to store Stack items we ensure true privacy
// console.log(Object.getOwnPropertyNames(stack));
// console.log(Object.keys(stack));
// console.log(stack.items);

console.log('Stack.isEmpty() =>', stack.isEmpty()); //output true

stack.push(5); // Adicão de novos elementos na pilha
stack.push(8);

console.log('stack after push 5 and 8 =>', stack.toString()); // Output 5 and 8  - Verificacão dos elementos na pilha
console.log('stack.peek() =>', stack.peek()); // Output 8 elemento no topo da pilha

stack.push(11); 
console.log('stack.size() after push 11 =>', stack.size()); // Outputs 3 elements
console.log('stack after push 5 and 8 =>', stack.toString());
console.log('stack.isEmpty() =>', stack.isEmpty()); // Ao chamar o método isEmpty deverá true se a pilha estiver vazia e false se tiver elementos

stack.push(15);




//https://github.com/loiane/javascript-datastructures-algorithms/blob/main/examples/chapter04/01-Stack.js
