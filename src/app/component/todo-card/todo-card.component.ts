import { Component, Input } from '@angular/core';
import { ToDo } from '../../model/todo';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  @Input() element?: ToDo;
}
