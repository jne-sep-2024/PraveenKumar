
const element = document.getElementById("btn").addEventListener("click", sample);
    function sample() {
        let a = document.getElementById("username").value;
        let b = document.getElementById("password").value;
        if (a.trim()!= "" && b.trim()!= "") {
            alert("Login Successful");
        } else {
            alert("Please enter valid Username and Password");
        }
    }

   async function data(){
    let a = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    let arr="";
        a.forEach(i => {
            arr=arr+i.username + "\n" ;
        });
        console.log(arr);
    }data();

function handleSubmit() {

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageElement = document.getElementById('message');
    
    if (!username || !password) {
        messageElement.textContent = 'Please enter both username and password.';
        return;
    }
    const users = JSON.parse(localStorage.getItem('users'));

    if (users[username]) {
        messageElement.textContent = 'User already exists.';
    } else {
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        messageElement.textContent = 'User registered successfully.';
    }
}
 

