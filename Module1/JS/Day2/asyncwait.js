function promise(data){
    return new Promise((resolve, reject) => {
setTimeout(()=>{
    console.log("data", data)
    resolve("Recieved");
},2000);
})
}
async function datainfo() {
    await promise(1);
    await promise(2);
    await promise(3);
    await promise(4);
}
datainfo();
