// Settled Promises


let p1 = Promise.reject("Failed");
let p2 = Promise.resolve("Success");
let p3 = Promise.resolve("Another success");

Promise.race([p1, p2, p3]).then(result => {
  console.log(result);  // Output: "Success"
}).catch(error => console.log(error)); 

let a1 = Promise.reject("Failed");
let a2 = Promise.resolve("Success");
let a3 = Promise.resolve("Another success");

Promise.any([a1, a2, a3]).then(result => {
  console.log(result);  // Output: "Success"
}).catch(error => console.log(error)); 

let b1 = Promise.reject("Failed");
let b2 = Promise.resolve("Success");
let b3 = Promise.resolve("Another success");

Promise.all([b1, b2, b3]).then(result => {
  console.log(result);  // Output: "Success"
}).catch(error => console.log(error));

