import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  company: string = '';
  role: string = '';

  constructor(private router: Router) { }

  // Handle form submission
  onSubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission

    const apiUrl = 'http://localhost:4000/user/register'; // <-- Replace with your API URL

    // Prepare data for the POST request
    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      gender: this.gender,
      company: this.company,
      role: this.role
    };

    console.log(userData);
    
    // Make the POST request using fetch
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('User added successfully:', data);
        this.router.navigate(['/user-management']); // Navigate back to User Management on success
      })
      .catch(error => {
        console.log(error);
        alert('Error adding user:');
      });
  }
}
