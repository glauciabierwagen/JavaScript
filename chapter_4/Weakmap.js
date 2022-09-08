// @ts-check


const _items = new WeakMap();
const _count = new WeakMap();

class Pilha {
  constructor() {
    _count.set(this, 0);
    _items.set(this, {});
  }

  push(element) {
    const items = _items.get(this);
    const count = _count.get(this);
    items[count] = element;
    _count.set(this, count + 1);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const items = _items.get(this);
    let count = _count.get(this);
    count--;
    _count.set(this, count);
    const result = items[count];
    delete items[count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    const items = _items.get(this);
    const count = _count.get(this);
    return items[count - 1];
  }

  isEmpty() {
    return _count.get(this) === 0;
  }

  size() {
    return _count.get(this);
  }

  clear() {
    /* while (!this.isEmpty()) {
        this.pop();
      } */
    _count.set(this, 0);
    _items.set(this, {});
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const items = _items.get(this);
    const count = _count.get(this);
    let objString = `${items[0]}`;
    for (let i = 1; i < count; i++) {
      objString = `${objString},${items[i]}`;
    }
    return objString;
  }
}

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';
  while (number > 0) { // {1}
  rem = Math.floor(number % 2); // {2}
  remStack.push(rem); // {3}
  number = Math.floor(number / 2); // {4}
  }
  while (!remStack.isEmpty()) { // {5}
  binaryString += remStack.pop().toString();
  }
  return binaryString;
  }

//console.log(decimalToBinary(233)); // 11101001
//console.log(decimalToBinary(10)); // 1010
//console.log(decimalToBinary(1000)); // 1111101000

//Conversor de base

function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // {6}
  let number = decNumber;
  let rem;
  let baseString = '';
  if (!(base >= 2 && base <= 36)) {
  return '';
  }
  while (number > 0) {
  rem = Math.floor(number % base);
  remStack.push(rem);
  number = Math.floor(number / base);
  }
  while (!remStack.isEmpty()) {
  baseString += digits[remStack.pop()]; // {7}
  }
  return baseString;
  }

console.log(baseConverter(100345, 2)); // 11000011111111001
console.log(baseConverter(100345, 8)); // 303771
console.log(baseConverter(100345, 16)); // 187F9
console.log(baseConverter(100345, 35)); // 2BW0