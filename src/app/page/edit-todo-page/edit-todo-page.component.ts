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
import { ActivatedRoute, Router } from '@angular/router';
import { dueDateValidator } from '../../helper/validator/dateValidator';

@Component({
  selector: 'app-edit-todo-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-todo-page.component.html',
  styleUrl: './edit-todo-page.component.scss',
})
export class EditTodoPageComponent {
  todoForm: FormGroup;
  element?: ToDo;
  index?: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private todoService: TodoServiceService
  ) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', [Validators.required, dueDateValidator()]],
      description: [''],
    });
  }

  ngOnInit() {
    this.index = +this.route.snapshot.paramMap.get('index')!;
    this.element = this.todoService.getTodoByIndex(this.index);
  }

  onSubmit() {
    if (this.todoForm.valid) {
      const newTodo: ToDo = {
        ...this.todoForm.value,
        dueDate: new Date(this.todoForm.value.dueDate),
      };

      this.todoService.updateTodo(this.index!, newTodo);
      this.router.navigate(['/main']);
    } else {
      alert('Not a valid form');
    }
  }

  formatDate(date: Date) {
    return new Date(date).toISOString().split('T')[0];
  }
}
