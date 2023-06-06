const obj1 = { name: "John", age: 24 };
const obj2 = { name: "Alice", gender: "female" };

let mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);
