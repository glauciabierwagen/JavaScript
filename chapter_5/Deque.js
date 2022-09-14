//Deque

class Deque {
    constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
    }
}

console.log(Deque);

// Add front = adiciona elemento na frente na fila

//addFront(element) {
//    if (this.isEmpty()) { // {1}
//    this.addBack(element);
//    } else if (this.lowestCount > 0) { // {2}
//    this.lowestCount--;
//    this.items[this.lowestCount] = element;
//    } else {
//    for (let i = this.count; i > 0; i--) { // {3}
//    this.items[i] = this.items[i - 1];
//    }
//    this.count++;
    
//    this.lowestCount = 0;
//    this.items[0] = element; // {4}
//    }
//    }

const deque = new Deque();
console.log(deque.isEmpty()); // exibe true
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString()); // John,Jack
deque.addBack('Camila');
console.log(deque.toString()); // John,Jack,Camila
console.log(deque.size()); // exibe 3
console.log(deque.isEmpty()); // exibe false
deque.removeFront(); // remove John
console.log(deque.toString()); // Jack,Camila
deque.removeBack(); // Camila decide sair
console.log(deque.toString()); // Jack
deque.addFront('John'); // John retorna para pedir uma informação
console.log(deque.toString()); // John,Jack

//https://github.com/loiane/javascript-datastructures-algorithms/blob/main/examples/chapter05/02-Deque.js