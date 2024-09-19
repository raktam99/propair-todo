import { Component } from '@angular/core';
import { TodoCardComponent } from '../../component/todo-card/todo-card.component';
import { ToDo } from '../../model/todo';
import { Router } from '@angular/router';
import { TodoServiceService } from '../../service/todo-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [TodoCardComponent, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  todos?: ToDo[];

  constructor(
    private router: Router,
    private todoService: TodoServiceService
  ) {}

  ngOnInit() {
    this.todoService.todos$.subscribe((todos) => {
      this.todos = todos;
    });
  }

  addTodo() {
    this.router.navigate(['/create']);
  }
}
