import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() eachTask: any;

  @Output() deletedItem = new EventEmitter<string>();

  handleDelete(item: string) {
    this.deletedItem.emit(item);
  }
}
