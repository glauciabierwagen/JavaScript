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

//Percorrendo a lista com um laco até alcancar a posicão desejada - Algoritmo

//getElementAt(index) {
//   if (index >= 0 && index <= this.count) { // {1}
//    let node = this.head; // {2}
//    for (let i = 0; i < index && node != null; i++) { // {3}
//    node = node.next;
//    }
//    return node; // {4}
//    }
//    return undefined; // {5}
//    }

//Inserindo um elemento em qualquer posicão (insert)
//Algoritmo

//insert(element, index) {
//    if (index >= 0 && index <= this.count) { // {1}
//    const node = new Node(element);
//    if (index === 0) { // adiciona na primeira posição
//    const current = this.head;
//   node.next = current; // {2}
//   this.head = node;
//    } else {
//    const previous = this.getElementAt(index - 1); // {3}
//    const current = previous.next; // {4}
//    node.next = current; // {5}
//    previous.next = node; // {6}
//   }
//    this.count++; // atualiza o tamanho da lista
//   return true;
//    }
//    return false; // {7}
//   }

//Método indexOF = Esse método recebe o valor de um elemento e devolve a sua posição caso ele seja
//encontrado. Do contrário, -1 será devolvido.

//indexOf(element) {
//    let current = this.head; // {1}
//    for (let i = 0; i < this.count && current != null; i++) { // {2}
//    if (this.equalsFn(element, current.element)) { // {3}
//    return i; // {4}
//    }
//   current = current.next; // {5}
//   }
//    return -1; // {6}
//    }

//Removendo um elemento da lista ligada

//remove(element) {
//    const index = this.indexOf(element);
//    return this.removeAt(index);
//    }

//Métodos isEmpty, size e getHead
//Size = devolve o número de elementos da lista.
//isEmpty = devolverá true se não houver nenhum elemento na lista, e false caso contrário.
//getHead = se precisarmos iterar pela lista fora da implementação da classe, podemos
//disponibilizar um método para obter o primeiro elemento da lista.

//Método toString = O método toString converte o objeto LinkedList em uma string.

//toString() {
//    if (this.head == null) { // {1}
//   return '';
//   }
//    let objString = `${this.head.element}`; // {2}
//    let current = this.head.next; // {3}
//    for (let i = 1; i < this.size() && current != null; i++) { // {4}
//    objString = `${objString},${current.element}`;
//    current = current.next;
//    }
//    return objString; // {5}
//    }