// Promise Chaining

function promise(data){
    return new Promise((resolve, reject) => {
setTimeout(()=>{
    console.log("data", data)
    resolve("Recieved");
},2000);
})
}

promise(1).then((res)=>{
    return promise(2);
}).then((res)=>{
return promise(3);
}).then((res)=>{
    console.log(res);
});

