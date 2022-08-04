// @ts-check
/* eslint-disable */
//Array to storage the temperature

let averageTempDay1 = [72, 75, 79, 79, 81, 81];
let averageTempDay2 = [81, 79, 75, 75, 73, 72];

let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 72];

console.log(averageTemp[0]);

//Array multidimensional, using arrays of arrays. In the following case Day 1 is represented by 0 and Day 2 by 1. 
//Each hour is shown by the numbers next to the day 0 to 5. 

//Day 1

averageTemp[0] = [];
averageTemp[0][0]= 72;
averageTemp[0][1]= 75;
averageTemp[0][2]= 79;
averageTemp[0][3]= 79;
averageTemp[0][4]= 81;
averageTemp[0][5]= 81;

console.log(averageTemp[0]);

//Day 2

averageTemp[1] = [];
averageTemp[1][0]= 81;
averageTemp[1][1]= 79;
averageTemp[1][2]= 75;
averageTemp[1][3]= 75;
averageTemp[1][4]= 73;
averageTemp[1][5]= 73;

console.log(averageTemp[0]);

// printMatrix(averageTemp);
console.table(averageTemp[0]);
console.table(averageTemp[1]);

//Bidimensional Array. Generic function

function printMatrix(myMatrix) {
    for (let i = 0; i < myMatrix.lenght; i++) {
        for (let j = 0; j < myMatrix; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}

//* * Multidimensional Matrix

// Matrix 3x3x3 - Cube

const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = [];
    for (let j = 0; j < 3; j++) { 
        matrix3x3x3[i][j] = [];
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
          }
    }
    }
console.log(matrix3x3x3);

for (let i = 0; i < matrix3x3x3.length; i++) {
    for (let j = 0; j < matrix3x3x3[i].length; j++) {
        for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
            console.log(matrix3x3x3[i][j][z]);
        }
    }
}

// user-friendly-output
const matrix3x3x3Output = [];
for (let i = 0; i < 3; i++) {
  matrix3x3x3Output[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3x3Output[i][j] = `[${matrix3x3x3[i][j].join(', ')}]`;
  }
}
console.log('matrix3x3x3 three-dimensional array:');
console.table(matrix3x3x3Output);