// @ts-check
/* eslint-disable */

function testTruthy(val) {
    return val ? console.log('truthy') : console.log('falsy');
  }

  
testTruthy(true); // true
testTruthy(false); // false
testTruthy(new Boolean(false)); // true (objetc is always true)

testTruthy(''); // false
testTruthy('a'); // true
testTruthy('Packt'); // true
testTruthy(new String('')); // true (object is always true)

testTruthy(1); // true
testTruthy(-1); // true
testTruthy(NaN); // false
testTruthy(new Number(NaN)); // true

testTruthy({}); // true (object is always true)

var obj = {name: 'John'};
testTruthy(obj); // true
testTruthy(obj.name); //true
testTruthy(obj.age); // false - age (property does not exist)

// Packt == true

console.log('packt' ? true: false)
//outputs true

console.log('packt' == true);
// 1 - converts Boolean using toNumber
// 'packt' == 1
// 2 - converts String using toNumber
// NaN == 1
// outputs false

console.log('packt' == false);
// 1 - convert Boolean using Number
// 'packt' = 0
// 2 -convert String using toNumber
//NaN == 00
//outputs false

console.log([0] == true);
// 1 - converts Boolean using toNumber
// [0] == 1
// 2 - converts Object using toPrimitive
// 2.1 - [0].valueOf() is not primitive
// 2.2 - [0].toString is 0
// 0 == 1
// outputs false

//* ****************************** ===
console.log('packt' === true); // false
console.log('packt' === 'packt'); // true

var person1 = {name: 'John'};
var person2 = {name: 'John'};
console.log(person1 === person2); //false, different objects


/* Example 01 - if */
var num = 1;
if (num === 1) {
  console.log('num is equal to 1');
}

/* Example 02 - if-else */
var num = 0;
if (num === 1) {
    console.log('num is equal to 1')
} else {
    console.log('num is not equal to 1, the value of num is' + num)
}

/* Example 03 - if-else-if-else... */


var month = 5;
if (month === 1) {
    console.log('January');
} else if (month === 2) {
    console.log('February');  
} else if (month === 3) {
    console.log('March');  
} else {
    console.log('Month is  not January, Frebuary or March');  
}

/* Example 04 - switch */
var month = 5;
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break
    default:
        console.log('Month is not January, Frebruary or March');
        break;
}

/* Example 05 - ternary operator - if..else */
num = 2;
if (num === 1) {
    num--;
} else {
    num++;
}

// is the same as
num === 1 ? num-- : num++;

// @ts-check
/* eslint-disable */

console.log('**** for example ****');
/* for - example */
for (var i = 0; i < 10; i++) {
  console.log(i);
}

/* while - example */

console.log('****while example****');
var i = 0;
while (i<10) {
    console.log(i);
    i++;
}

/* do-while - example */

console.log('****do-while example****');
var i = 0;
do {
    console.log(i);
    i++;
} while (i<10);