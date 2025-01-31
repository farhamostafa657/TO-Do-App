import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-todo-list',
  imports: [CardComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() tasksArray: any;

  @Output() sentTaskToWrapper = new EventEmitter<string>();

  handleDelete(task: string) {
    this.sentTaskToWrapper.emit(task);
  }
}
