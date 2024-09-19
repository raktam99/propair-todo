import { Component, HostListener } from '@angular/core';
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

    this.todoService.initializeTodos(data);
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    this.todoService.saveTodos();
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }
}
