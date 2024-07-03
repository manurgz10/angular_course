import { Component, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { CardComponent } from '../shared/card/card.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  id = input.required<string>();
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id());
  }

  get selectedUser() {
    return DUMMY_USERS.find((user) => user.id === this.id())?.name!;
  }

  get selectedId() {
    return DUMMY_USERS.find((user) => user.id === this.id())?.id!;
  }

  startAddingTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
