import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoServiceService } from '../../service/todo-service.service';
import { ToDo } from '../../model/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-todo-page.component.html',
  styleUrl: './create-todo-page.component.scss',
})
export class CreateTodoPageComponent {
  constructor(
    private router: Router,
    private todoService: TodoServiceService
  ) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      let newTodo = new ToDo();
      newTodo.title = form.value.title;
      newTodo.dueDate = new Date(form.value.dueDate);
      newTodo.description = form.value.description;

      this.todoService.addTodo(newTodo);
      this.router.navigate(['/main']);
    } else {
      alert('Not a valid form');
    }
  }
}
