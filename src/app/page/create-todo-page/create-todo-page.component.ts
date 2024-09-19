import { Component } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoServiceService } from '../../service/todo-service.service';
import { ToDo } from '../../model/todo';
import { Router } from '@angular/router';
import { dueDateValidator } from '../../helper/validator/dateValidator';

@Component({
  selector: 'app-create-todo-page',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './create-todo-page.component.html',
  styleUrl: './create-todo-page.component.scss',
})
export class CreateTodoPageComponent {
  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private todoService: TodoServiceService
  ) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', [Validators.required, dueDateValidator()]],
      description: [''],
    });
  }

  onSubmit() {
    if (this.todoForm.valid) {
      const newTodo: ToDo = {
        ...this.todoForm.value,
        dueDate: new Date(this.todoForm.value.dueDate),
      };

      this.todoService.addTodo(newTodo);

      this.router.navigate(['/main']);
    } else {
      alert('Not a valid form');
    }
  }

  getToday() {
    return new Date().toISOString().split('T')[0];
  }
}
