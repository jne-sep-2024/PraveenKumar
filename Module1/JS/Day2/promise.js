// Promise


function promise(data){
    return new Promise((resolve, reject) => {
setTimeout(()=>{
    console.log("data", data)
    resolve("Recieved");
},2000);
})
}

promise.then((res)=>
{
console.log(res);
})
promise.catch((err)=>
    {
    console.log(err);
    })
