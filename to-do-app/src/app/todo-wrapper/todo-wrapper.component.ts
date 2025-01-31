import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@Component({
  selector: 'app-todo-wrapper',
  imports: [TodoListComponent, TodoFormComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css',
})
export class TodoWrapperComponent {
  tasks: string[] = [];

  handleAddTask(task: string) {
    this.tasks = [...this.tasks, task];
    console.log(this.tasks);
  }

  handleDeletTask(task: string) {
    this.tasks = this.tasks.filter((taskItem) => taskItem !== task);
  }
}
