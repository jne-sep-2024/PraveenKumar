// Array Methods..

// Map

let array=[10,20,60,39,50,23]
let arr=array.map((output) =>{
    return output*2;
})
console.log(arr);


// Filter

let name=["praveen","Mohit","akash","pranav","abhiskek"]
let name2=name.filter((name1)=>{
    return name1===("praveen");
})
console.log(name2)

// Find

let model=[{
    name : 'Tvs',
    cc : 100,
    Type : 'Manual'
},{
    name : 'Bajaj',
    cc : 150,
    Type : 'Manual'
}]

let mod=model.find((info)=>{
return info.name == 'Tvs';
})
console.log(mod)

// Foreach

let val=[11,22,33,44,55,66,77,88]
val.forEach((val1) =>{
    console.log(val1);
});  

// Some

let val2=[11,22,33,44,55,66,77,88]
let total=val2.some((val1) =>{
    return val1 <=11;
});
console.log(total)

// Every

let val3=[11,22,33,44,55,66,77,88]
let total1=val3.every((val1) =>{
    return val1 <=88;
});
console.log(total1)

// Reduce

    let val4=[11,22,33,44,55,66,77,88]
    let total2=val4.reduce((curr, item) =>{
        return curr + item;
    },);
    console.log(total2)

 // Includes
 
 let val5=[11,22,33,44,55,66,77,88]
    let total3=val5.includes(100);
    console.log(total3);

let val6=[11,22,33,44,55,66,77,88]
console.log(val6.includes(100));