import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: any[] = []; // Array to hold the list of users

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    // Fetch list of users from an API endpoint
    this.http.get<any[]>('http://localhost:3000/api/users').subscribe(
      (response: any[]) => {
        this.users = response; // Assign response to users array
      },
      error => {
        console.error('An error occurred while fetching users:', error);
        // Handle error display or other actions as needed
      }
    );
  }

  deleteUser(userId: string) {
    // Call your delete user API endpoint with the userId
    this.http.delete(`http://localhost:3000/api/users/${userId}`).subscribe(
      () => {
        alert('User deleted successfully');
        // After deleting, fetch the updated user list to reflect changes
        this.fetchUsers();
      },
      error => {
        console.error('An error occurred while deleting user:', error);
        // Handle error display or other actions as needed
      }
    );
  }

  clicked(){
    alert('button clicked')
  }
}
