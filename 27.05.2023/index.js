// Numbers:
// let length = 16;
// let weight = 7.5;
// // Strings:
// let color = "Yellow";
// let lastName = "Johnson";
// // Booleans
// let x = true;
// let y = false;
// // Object:
// const person = {firstName:"John", lastName:"Doe"};
// // Array object:
// const cars = ["Saab", "Volvo", "BMW"];
// // Date object:
// const date = new Date("2022-03-25");

// 1. In ra kiểu dữ liệu của các biến sau: length, color, x, person, cars, date
// 2. Set length = length + "abc" sau đó in ra kiểu dữ liệu của nó (length)
// 3. Cho cars2 = ["Saab", "Volvo", "BMW"] hãy so sánh với cars và cho ra kết quả
// 4. cho person2 =  {firstName:"John", lastName:"Doe"}; hãy so sánh với person và cho ra kết quả
// 5. Hãy tạo 1 object có các thuộc tính sau:
// 1 thuộc tính có tên là weight: 60,
// 1 thuộc tính có tên là height: 180,
// 1 thuộc tính có tên là name: 'Thanh',
// 1 hàm có tên là getName() return về name trong object
// 1 hằng số có tên là RUNABLE = true;
// 6. Hãy in ra ngày hiện tại
// format dd/mm/yyyy (27/05/2023)

// 1. In ra kiểu dữ liệu của các biến sau: length, color, x, person, cars, date

let length = 16;
let weight = 7.5;
console.log("legth:", typeof length);

// // Strings:
let color = "Yellow";
let lastName = "Johnson";

console.log("color:", typeof color);

// // Booleans
let x = true;
let y = false;

console.log("x:", typeof x);

// Object:
const person = { firstName: "John", lastName: "Doe" };

console.log("person:", typeof person);

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

console.log("cars:", typeof cars);

// Date object:
const date = new Date("2022-03-25");

console.log("date:", typeof date);

// 2. Set length = length + "abc" sau đó in ra kiểu dữ liệu của nó (length)
const legth = length +"abc";

console.log("length:" ,typeof legth);

// 3. Cho cars2 = ["Saab", "Volvo", "BMW"] hãy so sánh với cars và cho ra kết quả
const cars1 = ["Saab", "Volvo", "BMW"];
const cars2 = ["Saab", "Volvo", "BMW"];



let sosanh1 ;

console.log(cars1 == cars2);

let sosanh2 = JSON.stringify(cars1) === JSON.stringify(cars2);
console.log(sosanh2);


// 4. cho person2 =  {firstName:"John", lastName:"Doe"}; hãy so sánh với person và cho ra kết quả

const person2 =  {firstName:"John", lastName:"Doe"};
const person1 = { firstName: "John", lastName: "Doe" };

let sosanh3 = JSON.stringify(person1) === JSON.stringify(person2);
console.log(sosanh3);


// 5. Hãy tạo 1 object có các thuộc tính sau:
// 1 thuộc tính có tên là weight: 60,
// 1 thuộc tính có tên là height: 180,
// 1 thuộc tính có tên là name: 'Thanh',
// 1 hàm có tên là getName() return về name trong object
// 1 hằng số có tên là RUNABLE = true;
// 6. Hãy in ra ngày hiện tại
// format dd/mm/yyyy (27/05/2023)

const Thanh1 =  {weight:"60", height:"180", name:"Thanh",
    RUNABLE: true,
    name: "Thanh",

    getName() {
        return this.name;
    },

};





let today = new Date();
let ddmmyyyy = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

console.log(ddmmyyyy)

