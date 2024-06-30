import { Component, Input, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

interface User {
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({
    required: true,
  }) user!: User;

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
   

}
