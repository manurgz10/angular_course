import { Component, inject, output, signal, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  close = output<void>();
  id = input.required<string>();
  private tasksService = inject(TasksService);

  newTask = {
    enteredTitle: signal(''),
    enteredSummary: signal(''),
    enteredDueDate: signal(''),
  };

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.newTask.enteredTitle(),
        summary: this.newTask.enteredSummary(),
        date: this.newTask.enteredDueDate(),
      },
      this.id()
    );
    this.close.emit();
  }
}
