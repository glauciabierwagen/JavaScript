// @ts-check
/* eslint-disable */

var num = 1; // {1}
num = 3; // {2}
var price = 1.5; // {3}
var myName = 'Packt'; // {4}
var trueValue = true; // {5}
var nullVar = null; // {6}
var und; // {7}

console.log('num: ' + num);
console.log('myName: ' + myName);
console.log('trueValue: ' + trueValue);
console.log('price: ' + price);
console.log('nullVar: ' + nullVar);
console.log('und: ' + und);

document.write('My num here:' + num);
document.write('My name here:' + myName);

alert('My price here' + price);

// ******* Variable Scope

var myVariable = 'global';
const myOtherVariable = 'global';

function myFunction() {
    myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
  var myOtherVariable = 'local';
  return myOtherVariable;
}

console.log(myVariable); //{1}
console.log(myFunction()); //{2}

console.log(myOtherVariable); //{3}
console.log(myOtherFunction()); //{4}
console.log(myOtherVariable); //{5}

/* Arithmetic operators */

var num = 0; // {1}
console.log('num value is:' + num);

num = num + 2;
console.log('num value is:' + num);

num = num * 3;
console.log('num value is:' + num);

num = num / 2;
console.log('num value is:' + num);

num++;
console.log('num value is:' + num);

num--;
console.log('num value is:' + num);

console.log('num mod 2 value is ' + num % 2);

/* Assignment operators */
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

/* Assignment operators */
num = 1;

console.log('num == 1 : ' + (num == 1)); // {3}
console.log('num === 1 : ' + (num === 1)); 
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num < 1 : ' + (num < 1));
console.log('num <= 1 : ' + (num <= 1));

/* Logical operators */
console.log('true && false : ' + (true && false));
console.log('true || false : ' + (true || false));
console.log('!true : ' + !true);

/* Bitwise operators */
console.log('5 & 1:', 5 & 1); // same as 0101 & 0001 (result 0001 / 1)
console.log('5 | 1:', 5 | 1); // same as 0101 | 0001 (result 0001 / 5)
console.log('~5', ~5); // same as -0101 (result 1010 / 10)
console.log('5 ^ 1:', 5 ^ 1); // same as 0101 ^ 0001 (result 0100 / 4)
console.log('5 << 1:', 5 << 1); // same as 0101 << 1 (result 1010 / 10)
console.log('5 >> 1:', 5 >> 1); // same as 0101 >> 1 (result 0010 / 2)


/* typeOf */
console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1, 2, 3]:', typeof [1, 2,3]);
console.log('typeof {name:John}:', typeof {name: 'John'});

/* delete */
var myObj = {name: 'John', age: 21};
delete myObj.age;
console.log(myObj); //Object {name: "John"}

