//Callback Hell

function call(message, nextdata){
  setTimeout(() =>{
    console.log("getting data",message);
    if (nextdata){
nextdata();
    }
  },2000);
}

// function call1(message){
//   setTimeout(() =>{
//     console.log("getting data 2");
//     message();
//   },2000);
// }

// function call2(message){
//   setTimeout(()=>{
//     console.log("Getting data 3");
//     message();
//   },2000)
// }

call(1,()=>{
  call(2,()=>{
    console.log("Got Data");
  })
  })