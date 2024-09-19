import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoServiceService } from '../../service/todo-service.service';
import { NgForm, FormsModule } from '@angular/forms';
import { ToDo } from '../../model/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-todo-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-todo-page.component.html',
  styleUrl: './edit-todo-page.component.scss',
})
export class EditTodoPageComponent {
  element?: ToDo;
  index?: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todoService: TodoServiceService
  ) {}

  ngOnInit() {
    this.index = +this.route.snapshot.paramMap.get('index')!;
    this.element = this.todoService.getTodoByIndex(this.index);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      let newTodo = new ToDo();
      newTodo.title = form.value.title;
      newTodo.dueDate = new Date(form.value.dueDate);
      newTodo.description = form.value.description;

      this.todoService.updateTodo(this.index!, newTodo);
      this.router.navigate(['/main']);
    } else {
      alert('Not a valid form');
    }
  }

  formatDate() {
    return new Date(this.element?.dueDate!).toISOString().split('T')[0];
  }
}
