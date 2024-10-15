import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  @Input('id') id: string = '';
  user: any = {}; // To hold user data
  userId: string | null = null;
  users: any[] = []; // Replace with your user type
  selectedUser: any; // Store the user to be deleted
  isDeleteConfirmationVisible = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.id;

    this.fetchUsers(); // Fetch the users when the component initializes
  }


  // Fetch users from the backend
  fetchUsers() {
    const apiUrl = 'http://localhost:4000/user'; // Replace with your API URL

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.users = data.user; // Assume the data returned is an array of users
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }

  // Handle edit user
  editUser(user: any) {
    // Navigate to the registration form with the user data
    this.router.navigate(['/user-edit', user._id]);
  }

  openDeleteConfirmation(user: any) {
    this.selectedUser = user; // Set the user to be deleted
    this.isDeleteConfirmationVisible = true; // Show the modal
  }

  // Close delete confirmation modal
  closeDeleteConfirmation() {
    this.isDeleteConfirmationVisible = false; // Hide the modal
    this.selectedUser = null; // Reset selected user
    this.fetchUsers()
  }

  // Handle delete user
  deleteUser(user: any) {
    console.log("user: ", user);

    const apiUrl = `http://localhost:4000/user/${user}`; // Update with the correct API URL

    fetch(apiUrl, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete the user');
        }
        return response.json();
      })
      .then(() => {
        console.log('User deleted successfully');
        this.closeDeleteConfirmation(); // Hide the modal after deletion
      })
      .catch(error => {
        console.error('Error deleting user:', error);
        // alert('Error deleting user');
      });
  }
}
