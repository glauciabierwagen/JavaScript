const length = 5;
const int16 = new Int16Array(length);

const array16 = [];
array16.length = length;

for (let i = 0; i < length; i++) {
  int16[i] = i + 1;
}

console.log(int16);


//https://web.dev/webgl-typed-arrays/ Site com mais informacões