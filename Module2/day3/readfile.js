class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
const fs = require('fs');

const user = new User("John Doe", "john@example.com");

const userData = JSON.stringify(user);


fs.writeFile('userData.txt', userData, (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('Data successfully stored');
    }
});

fs.readFile('userData.txt', 'utf8',(err, res)=>{
    if(err){
        console.log("data not Found");
    }else{
        console.log("Data Found"+ res)
    }

})