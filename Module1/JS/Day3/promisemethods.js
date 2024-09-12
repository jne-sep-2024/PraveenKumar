// Settled Promises


let prom1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Rejected");
        reject("Jhon");
    },4000)
})
let prom=new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Resolved");
        resolve("Harry");
    },2000)
})

 let prom2=new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Resolved");
        resolve("Praveen");
    },
    6000)
})

Promise.all([prom1, prom, prom2])
.then((result)=>{
console.log(result);
})
.catch((err)=>{
    console.log(err);
})

