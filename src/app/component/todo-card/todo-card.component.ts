import { Component, Input } from '@angular/core';
import { ToDo } from '../../model/todo';
import { Router } from '@angular/router';
import { TodoServiceService } from '../../service/todo-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  @Input() element?: ToDo;

  constructor(
    private router: Router,
    private todoService: TodoServiceService
  ) {}

  editTodo() {
    const index = this.todoService.findIndex(this.element!);
    this.router.navigate(['/edit', index]);
  }

  formatDate(date: Date) {
    return new Date(date).toDateString();
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.element!);
  }

  markChecked() {
    this.todoService.checkTodo(this.element!);
  }
}
