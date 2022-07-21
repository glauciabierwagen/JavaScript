//Template Literals

//const book = {
  //  name: 'Learning JavaScript DataStructures and Algorithms'
 // };
  
 // console.log('You are reading ' + book.name + '.,\n	and this is a new line\n	and so is this.');
  
  //console.log(`You are reading ${book.name}.,
    // and this is a new line
   //   and so is this.`);

   // @ts-check
/* eslint-disable */

//* ****** EcmaScript 2015 (ES6): arrow functions (https://goo.gl/nM414v)

//ARROWS

var circleAreaES5 = function circleArea(r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
};
console.log(circleAreaES5(2));

// Using => rather than function

const circleArea = r => { // {1}
    const PI = 3.14;
    const area = PI * r * r;
    return area;
  };
  console.log(circleArea(2));

//Simpler version

  const circleArea2 = r => 3.14 * r * r;
console.log(circleArea2(2));

const hello = () => console.log('hello!');
hello()

//DEFAULT VALUE

function sum(x = 1, y = 2, z = 3) {
    return x + y + z;
    }
    console.log(sum(4, 2)); //it exibs 9

function sum(x, y, z) {
        if (x === undefined) x = 1;
        if (y === undefined) y = 2;
        if (z === undefined) z = 3;
        return x + y + z;
        }

function sum() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    return x + y + z;
}

let params = [3, 4, 5];
console.log(sum(...params));

function restParameterFunction(x, y, ...a) {
    return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, 'hello', true, 7));

function restParamaterFunction(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
    }
    console.log(restParamaterFunction(1, 2, 'hello', true, 7));


// PROPERTIES

let [x, y] = ['a', 'b'];
let obj = { x, y };
console.log(obj); // { x: "a", y: "b" }


const hello_test = {
    name: 'abcdef',
    printHello() {
    console.log(this.name +'Hello');
    }
    };
    console.log(hello_test);

//INHERITANCE
class Book { // {2}
  constructor(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  }
  
  printIsbn() {
  console.log(this.isbn);
  }
  }

class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
  super(title, pages, isbn);
  this.technology = technology;
}

printTechnology() {
  console.log(this.technology);
}
}

let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890',
'JavaScript');
console.log(jsBook.title);
console.log(jsBook.printTechnology());

//GETTERS and SETTERS

class Person {
  constructor(name) {
    this._name = name; // {1}
  }

  get name() { // {2}
    return this._name;
  }

  set name(value) { // {3}
    this._name = value;
  }
}

let lotChar = new Person('Frodo');
console.log(lotChar.name);
lotChar.name = 'Gandalf';
console.log(lotChar.name);
lotChar._name = 'Sam';
console.log(lotChar.name);

//EXPONENTIAL OPERATOR

const r = 2; 
const area1 = 3.14 * r * r;
const area2 = 3.14 * (r ** 2);
console.log(area1, area2);
const area3 = 3.14 * Math.pow(r, 2);

//MODULES

//const circleArea1 = r => 3.14 * (r ** 2);
//const squareArea = s => s * s; 
//export {circleArea1, squareArea};

//import * as area from './Calcarea';
//import { circleArea1, squareArea } from "./Calcarea";
//console.log(circle(2));
//console.log(squareArea(2));

//console.log(area.circle(2));
//console.log(area.square(2));

//import { circleArea1, squareArea } from './CalcArea'; // {2}
//import { circleArea1 as circle } from './CalcArea';

//console.log(circleArea(2));
//console.log(squareArea(2));

import Book2 from './Calcarea';
const myBook = new Book2('some title');
myBook.printTitle();