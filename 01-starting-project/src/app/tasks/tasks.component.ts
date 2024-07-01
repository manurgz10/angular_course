import { Component, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  id = input<string>();
  tasks = dummyTasks;

  get selectedUser() { 
    return DUMMY_USERS.find(user => user.id === this.id())?.name!;
  }

  get selectedId() {
    return DUMMY_USERS.find(user => user.id === this.id())?.id!;
  }

  get userTasks() {
    return this.tasks.filter(task => task.userId === this.selectedId);
  }
}
