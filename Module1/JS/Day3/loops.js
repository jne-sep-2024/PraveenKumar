// For Loop

let number=[10,12,23,34,45,65];
for (let i=0; i< number.length; i++)
{
    console.log(number[i]*2);
}

// While Loop

let num=1;
while(num<=5){
    console.log(num);
    num*=2;
}

// Ternary operator

let name="praveen";
let name1;
name1= name=='Jhon' ? 'Correct.' : 'Wrong.';
console.log(name1);

// Do While

let num1=200
do{
console.log(num1);
num1/=2;
}while(num1>=5);

// Switch

let fruits="Grapes";
switch(fruits){
    case "Grapes":
    case "Apple" : {
        console.log("This is Apple");
        break
    }
    case "Pineapple" : {
        console.log("This is Pineapple");
        break
    }
    case "Bananna" :{
        console.log("This is Bananna");
        break
    }
default :{
    console.log("Not Found");
}
}




