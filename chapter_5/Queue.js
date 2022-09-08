//QUEUE
//em FIFO (First In First Out, isto é, o primeiro que entra é o primeiro que sai), também conhecido como princípio do first-come first-served 
//(o primeiro a chegar é o primeiro a ser servido).

class Queue {
    constructor() {
        this.count = 0; // {1}
        this.lowestCount = 0; // {2}
        this.items = {}; // {3}
    }
}

console.log(Queue);

//https://github.com/loiane/javascript-datastructures-algorithms/blob/main/examples/chapter05/01-Queue.js