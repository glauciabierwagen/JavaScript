//ARRAYS 
//Arrays é uma ordem/ordenamento. Storage values. 

// @ts-check

const averageTempJan = 31.9;
const averageTempFev = 35.3;
const averageTempMar = 42.4;
const averageTempApr = 52;
const averageTempMay = 60.8;

console.log('averageTempJan', averageTempJan);
console.log('averageTempFev', averageTempFev);
console.log('averageTempMar', averageTempMar);
console.log('averageTempApr', averageTempApr);
console.log('averageTempMay', averageTempMay);

const averageTemp = [];
averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
averageTemp[2] = 42.4;
averageTemp[3] = 52;
averageTemp[4] = 60.8;

console.log('averageTemp[0]', averageTemp[0]);
console.log('averageTemp[1]', averageTemp[1]);
console.log('averageTemp[2]', averageTemp[2]);
console.log('averageTemp[3]', averageTemp[3]);
console.log('averageTemp[4]', averageTemp[4]);

let daysOfWeek = new Array();//new array
daysOfWeek = new Array(7);// tamanho da linha
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');//elementos da arrays diretamente 

//Best practice
daysOfWeek = [];
daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; //elementos da arrays diretamente without new array

console.log('dayOfweek.lenght', daysOfWeek.length);//Tamanho da array

//Acessing elements and iteration

for (let i= 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);
}

//Fibonacci sequence - discover 20 firts numbers of the sequence

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;
for (let i= 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i -2];
}
for (let i= 1; i < fibonacci.length; i++) {
    console.log(`fibonacci[${i}]`, fibonacci[i]);
}

//Adding elements

 let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 numbers[numbers.length] = 10;
 console.log(numbers);

 numbers.push(11);
 numbers.push(12, 13);
 console.log(numbers);

 //Inserting element in the first position in a array
 
//First methodo. It doesn't work
 Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
    }
    this[0] = value;
    };
    numbers.insertFirstPosition(-1);

    Array.prototype.insertFirstPosition = function(value) {
for (let i = this.length; i >= 0; i--) {
this[i] = this[i - 1];
}
this[0] = value;
};
numbers.insertFirstPosition(-1);

//Second method. Using unshift(deslocar)

numbers.unshift(-2);
numbers.unshift(-4, -3);
console.log(numbers);
console.log(numbers.length);

numbers.pop();
console.log('Removed last value with pop', numbers);

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1];
}

Array.prototype.reIndex = function(myArray) {
    const newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] !== undefined) {
            console.log(myArray[i]);
            newArray.push(myArray[i]);
        }
    }
    return newArray;
};


// remove first position manually and reIndex
Array.prototype.removeFirstPosition = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    return this.reIndex(this);
  };

  numbers = numbers.removeFirstPosition();
  console.log('Removed first with removeFirstPosition + reIndex', numbers);

  //Shift method for removing elements

  numbers.shift();
  console.log('Removed first with shift', numbers);
  console.log('Lenght after removed first with shift', numbers.length);

  //Using method splice to remove an element of an array specifying the position/index
  // splice method - parameter (index, howManyPositionsToBeRemoved, item1...itemX)

  numbers.splice(5, 3);
  console.log('Removing 3 elements (3, 4, 5) starting index 5', numbers);

  
  numbers.splice(5, 0, 3, 4, 5);
  console.log('Adding 3 elements (3, 4, 5) starting index 5', numbers);

  numbers.splice(5, 3, 10, 18, 19);
  console.log('Removing 3 starting index 5 and adding elements (10, 18, 19)', numbers);


