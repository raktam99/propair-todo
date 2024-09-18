import { Component } from '@angular/core';
import { TodoCardComponent } from '../../component/todo-card/todo-card.component';
import { ToDo } from '../../model/todo';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [TodoCardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  todos: ToDo[] = [new ToDo(), new ToDo(), new ToDo()];
}
