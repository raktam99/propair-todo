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

  initializeTodos(todos: ToDo[]) {
    this.todosSubject.next(todos);
  }

  deleteTodo(todoToDelete: ToDo) {
    let todos = this.todosSubject.value;
    let index = todos.findIndex((todo) => todo === todoToDelete);
    todos.splice(index, 1);
    this.todosSubject.next(todos);
    localStorage.setItem('todos', JSON.stringify(this.todosSubject.value));
  }

  checkTodo(todoToCheck: ToDo) {
    let todos = this.todosSubject.value;
    let index = todos.findIndex((todo) => todo === todoToCheck);
    this.todosSubject.value[index].isCompleted = true;
    localStorage.setItem('todos', JSON.stringify(this.todosSubject.value));
  }
}
