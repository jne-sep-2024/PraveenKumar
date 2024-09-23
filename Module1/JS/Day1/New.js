// console.log("Hello World")

// // Variable

// var name="praveen Kumar";
// let age=30;
// const DOB= '11/11/1999';
// console.log(name);
// console.log(age);
// console.log(DOB);

// Data Types

// let Adrress="pune";
// let mobileno=1234567;
// let Present="True";
// let ID=null;
// let isactive;
// let adhaarno= 123456783453456723456734567456;
// let s1 = Symbol("Thinkitive");
// console.log(typeof s1);

// converting Number to String/ String to Number

//Using tostring()

// let num=120;
// let num1=num.toString();
// console.log(num1);

// // using parseint

// let num2=parseInt("121");
// console.log(num2);

// // converting string to number

// let num3=Number(num2);
// console.log(num3);

// Number Methods

// console.log(Math.abs(-5.5)); // 5
// console.log(Math.ceil(5.01)); // 5



// console.log(Number.MAX_VALUE); /
// console.log(Number.MIN_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);


// String Methods

// let message= '    hello  ';
// console.log(message.length);
// console.log(message.charAt(4));
// console.log(message.includes('pra'));
// console.log(message.indexOf('h'));
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());
// console.log(message.trim());
// console.log(message.includes('hel'));

//Array Methods

// let array=[120,130,160,150,100,170]
// console.log(array);
// array.push(110);
// console.log(array);
// array.pop(110);
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift(110);
// console.log(array);
// array.splice(1,6, 105);
// console.log(array);
// array.sort();
// console.log(array);
// let index=array.indexOf(105);
// console.log(index);
// let lasindex=array.lastIndexOf(110);
// console.log(lasindex);

//For each

// let number=[20,30,40,50,50];
// let result=number.forEach((num) => {
//     console.log(num);
// });
// console.log(number);


// Map Function

// let number=[20,30,40,50,50];
// let result=number.map((num) => {
//      num=num*num;
//     console.log(num);
// return num;
// });ep 10 
// console.log(number);


// (function() {
//     console.log('This function runs immediately!');
// })();


// CallBacks

// function sum(a,b){
//     console.log(a+b);
// }
// function result(x,y,sum){
// sum(x,y);
// }
// result(10,17,sum);


function sum(a,b){
    return (a+b);
}
function result(x,y,sum){
console.log(sum(x,y));
}
result(10,17,sum);