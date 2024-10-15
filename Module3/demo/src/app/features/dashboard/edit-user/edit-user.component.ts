import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {
  user: any = {}; // To hold user data
  userId: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.fetchUserDetails();
  }

  fetchUserDetails() {
    const apiUrl = `http://localhost:4000/user/${this.userId}`; // Adjust the endpoint accordingly

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.user = data.user; // Populate the user data
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }

  // Handle form submission
  onSubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission

    const apiUrl = `http://localhost:4000/user/${this.userId}`; // Adjust the endpoint accordingly

    // Make the PUT request using fetch
    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.user) // Send updated user data
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('User updated successfully:', data);
        this.router.navigate(['/user-management']); // Navigate back to User Management on success
      })
      .catch(error => {
        console.error('Error updating user:', error);
        alert('Error updating user');
      });
  }
}