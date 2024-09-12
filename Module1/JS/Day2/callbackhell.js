//Callback Hell

function call(message){
  setTimeout(() =>{
    console.log("getting data 1");
    message();
  },2000);
}

function call1(message){
  setTimeout(() =>{
    console.log("getting data 2");
    message();
  },2000);
}

function call2(message){
  setTimeout(()=>{
    console.log("Getting data 3");
    message();
  },2000)
}

call(()=>{
    console.log("Got the Data1");
  call1(()=>{
    console.log("Got the Data2");
    call2(()=>{
 console.log("Got the Data3");
    })
  })
})