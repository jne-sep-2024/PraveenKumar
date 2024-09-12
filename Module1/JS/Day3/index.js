function Task(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((data) => {
    let row = '';   
    data.forEach((res) => {
     
      row += `
        <tr>
          <td>${res.id}</td>
          <td>${res.name}</td>
          <td>${res.username}</td>
          <td>${res.phone}</td>
        </tr>`;
    });

    console.log(row); 
    document.getElementById('one').innerHTML = row;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}