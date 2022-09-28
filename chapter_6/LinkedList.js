//import { defaultEquals } from '../util';
//import { Node } from '../javascript-datastructures-algorithms-main/src/js/data-structures/models/linked-list-models' // {1}
//export default class LinkedList {
//constructor(equalsFn = defaultEquals) {
//this.count = 0; // {2}
//this.head = undefined; // {3}
//this.equalsFn = equalsFn; // {4}
//}
//}

//INSERTING ELEMENTS (push)

//Algoritm inserting elements = method push

//push(element) {
//   const node = new Node(element); // {1}
//    let current; // {2}
//    if (this.head == null) { // {3}
//    this.head = node;
//    } else {
//    current = this.head; // {4}
//    while (current.next != null) { // {5} obtém o último item
//    current = current.next;
//    }
//   // e atribui o novo elemento a next para criar a ligação
//    current.next = node; // {6}
//   }
//    this.count++; // {7}
//    }

//const list = new LinkedList();
//list.push(15);
//list.push(10);

//REMOVING ELEMENTS (removeAT) = specific position

//Algoritm removing elements specific position

//removeAt(index) {
    // verifica valores fora do intervalo
//   if (index >= 0 && index < this.count) { // {1}
//    let current = this.head; // {2}
    //remove o primeiro item
//   if (index === 0) { // {3}
//    this.head = current.next;
//    } else {
    
//    let previous; // {4}
//    for (let i = 0; i < index; i++) { // {5}
//    previous = current; // {6}
//    current = current.next; // {7}
//   }
    // faz a ligação de previous com o next de current: pula esse elemento para
//   removê-lo
//    previous.next = current.next; // {8}
//    }
//    this.count--; // {9}
//    return current.element;
//    }
//    return undefined; // {10}
//    }

//https://github.com/loiane/javascript-datastructures-algorithms/blob/main/examples/chapter06/01-LinkedList.js

