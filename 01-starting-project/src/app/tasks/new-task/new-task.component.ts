import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  cancel = output<void>();
  add = output<NewTaskData>();

  newTask = {
    enteredTitle: signal(''),
    enteredSummary: signal(''),
    enteredDueDate: signal('')
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.newTask.enteredTitle(),
      summary: this.newTask.enteredSummary(),
      date: this.newTask.enteredDueDate()
    });
  }
}
