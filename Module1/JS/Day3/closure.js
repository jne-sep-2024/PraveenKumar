function nam(){
    let name1 =" Harry Potter";
    function another(){
        console.log(name1);
    }
    return another();
}
let other=nam();
console.log(other);
