import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [FormsModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  textDecore: string = 'none';
  completed: boolean = false;
  @Input() eachTask: any;

  @Output() deletedItem = new EventEmitter<string>();

  handleDelete(item: string) {
    this.deletedItem.emit(item);
  }
  handleText() {
    this.completed = !this.completed;
    this.textDecore = this.completed ? 'line-through' : 'none';
  }
}
