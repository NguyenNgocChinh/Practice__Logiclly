// a) Hãy tìm số lớn nhất và in ra console
// b) Hãy tính tổng (a+c)-b và in ra console
// c) Random 1 con số trong trong 3 biến trên

const a = 6;
const b = -75;
const c = -12;

// a




let maxValue = a;
if (b > maxValue) {
  maxValue = b;
}
if (c > maxValue) {
  maxValue = c;
}

console.log(maxValue);

// b
// let a = 6;
// let b = -75;
// let c = -12;

let d = a + c - b;

console.log(d);
console.log("sum=", d);

// c
let randomIndex = Math.floor(Math.random() * numbers.length);
let randomNumber = numbers[randomIndex];

console.log(randomNumber);
