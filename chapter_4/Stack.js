// import Stack from './../../src/js/data-structures/stack.js'; // ES2015 modules
// import StackArray from './../../src/js/data-structures/stack-array.js'; // ES2015 modules
// const Stack = require('../../dist/js/data-structures/stack'); // for node
// const Stack = stack; // older browsers - remove from html script import: type="module"

const { Stack } = PacktDataStructuresAlgorithms;

const stack = new Stack(); // new StackArray();

// using WeakMap to store Stack items we ensure true privacy
// console.log(Object.getOwnPropertyNames(stack));
// console.log(Object.keys(stack));
// console.log(stack.items);

console.log('Stack.isEmpty() =>', stack.isEmpty()); //output true

stack.push(5);
stack.push(8);

console.log('stack after push 5 and 8 =>', stack.toString()); // Output 5 and 8
console.log('stack.peek() =>', stack.peek()); // Output 8 elemento no topo da pilha

//https://github.com/loiane/javascript-datastructures-algorithms/blob/main/examples/chapter04/01-Stack.js
