import { Component, Input } from '@angular/core';
import { ToDo } from '../../model/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  @Input() element?: ToDo;

  constructor(private router: Router) {}

  editTodo() {
    this.router.navigate(['/edit']);
  }
}
