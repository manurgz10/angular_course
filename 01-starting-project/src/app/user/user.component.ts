import {
  Component,
  Input,
  computed,
  signal,
  input,
  Output,
  EventEmitter,
  output
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

interface User {
  id: string;
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
  // @Input({
  //   required: true,
  // }) user!: User;

  // @Output() select = new EventEmitter();

  user = input.required<User>();
  select = output<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar;
  });

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
