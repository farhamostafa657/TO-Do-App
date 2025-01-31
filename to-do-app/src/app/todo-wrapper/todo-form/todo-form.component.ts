import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  @Output() sendTask = new EventEmitter<string>();
  inputValue: string = '';

  sendData() {
    this.sendTask.emit(this.inputValue);
  }
}
