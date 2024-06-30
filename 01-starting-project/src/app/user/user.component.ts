import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[0]);

  // Así se haría con signals.

  imagePath = computed(() => {
    return 'assets/users/' + this.selectedUser().avatar;
  });

  // Manera tradicional

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }
}
