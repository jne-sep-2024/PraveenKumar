
// Object Creation and Object Methods

let obj={
    name : "Jhon Wick",
    age : 40,
    country : "USA",
    Gender : "Male"
}
let obj2={
    name : "Harry",
    age : 25,
    country : "India",
    Gender : "Male"
}

console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(obj);
Object.assign(obj, obj2);
console.log(obj);
Object.freeze(obj);
obj.number = 2345563;
