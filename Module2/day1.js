const person={
    name: "Ramu",
    age: 30,
    gender: "male",
    greet:() => {
        console.log("Hello" + this.name)
    }
};person.greet();


const details=[]