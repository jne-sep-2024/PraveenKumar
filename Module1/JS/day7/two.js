function a( a, b,c){
    return a*b*c;
}
let a1=a(10,20,30);
console.log(a1)

let a=((a,b,c)=> a*b*c);
console.log(a(10,20,30));



let  c={ 
    name2 : 'Wick' 
}
console.log(Object.keys(a));
console.log(Object.values(a));

Object.freeze(a);
a.name="Kumar";
console.log(a.name);

Object.assign(a,b,c);
console.log(a);


let array=[10,'20','pk',40];
let a=array.reduce((cur, res)=>{
return cur+res;
})
console.log(a);

let a={
    name : 'praveen',
    age : 25,
  }
  let  b={
      address : 'Raichur', 
  }

a.__proto__= b;
console.log(a.address);

function fact(a){
    let b = 1;
for(let i=1;i<=a;i++)
{  
      b=b*i;
}return b;
}
let a=fact(10);
console.log(a);

let fact=((a)=>{
    let b = 1;
    for(let i=1;i<=a;i++)
    {  
          b=b*i;
    }return b;
});
console.log(fact(10));


function prime(n){
if(n<=1){
    console.log("small number")
}
for(let i=2;i*i<=n;i++)
{
    if(n%i==0){
        console.log("not a prime");
        break;
    }
        console.log("Prime number");
}
}prime(9);  