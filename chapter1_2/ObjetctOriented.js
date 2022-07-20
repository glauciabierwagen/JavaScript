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