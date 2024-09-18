import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { TodoServiceService } from './service/todo-service.service';
import { ToDo } from './model/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'propair-todo';

  constructor(
    private router: Router,
    private todoService: TodoServiceService
  ) {}

  ngOnInit() {
    const stringData = localStorage.getItem('todos');
    const data: ToDo[] = stringData ? JSON.parse(stringData) : [];

    for (const element of data) {
      element.dueDate = new Date(element.dueDate);
      this.todoService.addTodo(element);
    }
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }
}
