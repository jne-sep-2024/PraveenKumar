//// CallBacks

function sum(a,b){
    return (a+b);
}
function result(x,y,sum){
console.log(sum(x,y));
}
result(10,17,sum);

//Exmaple 2 for callback

function multiplication(number1,number2){
 console.log(number1*number2);
}
function all(x,y){
multiplication(x,y);
}
all(10,20,multiplication);

// //Immediate invoke function

(function() {
    console.log('This function runs immediately!');
})();
