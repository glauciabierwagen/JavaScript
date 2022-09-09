//QUEUE
//em FIFO (First In First Out, isto é, o primeiro que entra é o primeiro que sai), também conhecido como princípio do first-come first-served 
//(o primeiro a chegar é o primeiro a ser servido).

class QueueTest {
    constructor() {
        this.count = 0; // {1}
        this.lowestCount = 0; // {2}
        this.items = {}; // {3}
    }
}

console.log(QueueTest);

//Enqueue = inserting the elments in the queue

//enqueue(element) {
//   this.items[this.count] = element;
//    this.count++;
//}

//dequeue = remove the elements in the queue

items = {
    0: 5,
    1: 8
    };
    count = 2;
    lowestCount = 0;


//dequeue() {
//   if(this.isEmpty()) {
//        return undefined;
//    }
//   const result = this.items[this.lowestCount];
//    delete this.items[this.lowestCount];
//   this.lowestCount++;
//    return result;
//}


//peek = verificar qual é o elemento que está na frente na 

//peek() {
//    if (this.isEmpty()) {
//    return undefined;
//    }
//    return this.items[this.lowestCount];

// isEmpty = return true if the queue is empty
//    }

//isEmpty() {
//    return this.count - this.lowestCount === 0;
//}

//size = size of the queue

//isEmpty() {
//    return this.size() === 0;
//   }

// Clear = limpa os elementos da fila

//clear() {
//    this.items = {};
//    this.count = 0;
//   this.lowestCount = 0;
//    }

//toString

//toString() {
//    if (this.isEmpty()) {
//    return '';
//    }
//    let objString = `${this.items[this.lowestCount]}`;
//    for (let i = this.lowestCount + 1; i < this.count; i++) {
//    objString = `${objString},${this.items[i]}`;
//    }
//    return objString;
//   }


//https://github.com/loiane/javascript-datastructures-algorithms/blob/main/examples/chapter05/01-Queue.js