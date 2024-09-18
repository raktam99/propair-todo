import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToDo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  private todosSubject = new BehaviorSubject<ToDo[]>([]);
  todos$ = this.todosSubject.asObservable();

  addTodo(newTodo: ToDo) {
    const currentTodos = this.todosSubject.value;
    this.todosSubject.next([...currentTodos, newTodo]);
    localStorage.setItem('todos', JSON.stringify(this.todosSubject.value));
  }
}
