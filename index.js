// a) Hãy tìm số lớn nhất và in ra console
// b) Hãy tính tổng (a+c)-b và in ra console
// c) Random 1 con số trong trong 3 biến trên

// const a = 6;
// const b = -75;
// const c = -12;

// a
var numbers = [6, -75, -12];

var maxInNumbera = Math.max.apply(Math, numbers);

console.log(numbers);
console.log("max= ", maxInNumbera);


// b
var a = 6;
var b = -75;
var c = -12;

var d = (a+c)-b 

console.log(d);
console.log("sum=", d);


// c
var randomIndex = Math.floor(Math.random() * numbers.length);
var randomNumber = numbers[randomIndex];

console.log(randomNumber);
