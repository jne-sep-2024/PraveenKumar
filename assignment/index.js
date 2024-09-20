let result = `<table>
<thead>
<tr>
<th> Firstname </th>
<th> Lastname </th>
<th> Email </th>
</tr>
</thead><tbody>`;
let end = `</tbody></table>`;
let arr = [];
function task() {
    let firstname = document.getElementById("fname").value; 
    let lastname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    if (firstname && lastname && email) {
        arr.push({ fname: firstname, lname: lastname, email: email });
        let row = '';
        for (let i = 0; i < arr.length; i++) {
            row += `<tr>
            <td> ${arr[i].fname}</td>
            <td> ${arr[i].lname}</td>
            <td> ${arr[i].email}</td>
            </tr>`; 
        }
        document.getElementById("result").innerHTML = result + row + end;
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        alert("User added successfully!");
    } else {
        alert("Please fill in all fields.");
    }
}
document.getElementById("click").addEventListener('click', (event)=>{
     event.preventDefault();
     let firstname = document.getElementById("fname").value; 
    //  let lastname = document.getElementById("lname").value;
     let email = document.getElementById("email").value;
    let valid = true;
    if (firstname === '') {  
        document.getElementById('firstNameError').textContent = 'First name is required';
        valid = false;
    } if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        valid = false;
      }
      else{
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        valid = false;
      } }   
      if (valid) {
        document.getElementById('emailError').textContent="";
        console.log("Im Here");
        // event.preventDefault();
        task();
      } 
    })


    






// // {
// //     let data=10;
// //     data=20;
// //     console.log(data);
// // }
// //  data=30;
// // console.log(data);


// let arr = [1, 2, 3, 4];
// arr.splice(1, 2, 'a', 'b');
// // arr.splice(1,1);
// console.log(arr)

