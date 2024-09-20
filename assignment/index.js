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
document.getElementById("click").addEventListener('click', task);