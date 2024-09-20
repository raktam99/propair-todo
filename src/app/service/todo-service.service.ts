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
  }

  initializeTodos(todos: ToDo[]) {
    this.todosSubject.next(todos);
  }

  deleteTodo(todoToDelete: ToDo) {
    let todos = this.todosSubject.value;
    let index = todos.findIndex((todo) => todo === todoToDelete);
    todos.splice(index, 1);
    this.todosSubject.next(todos);
  }

  checkTodo(todoToCheck: ToDo) {
    let todos = this.todosSubject.value;
    let index = todos.findIndex((todo) => todo === todoToCheck);
    todos[index].isCompleted = true;
    this.todosSubject.next(todos);
  }

  findIndex(todoToFind: ToDo) {
    return this.todosSubject.value.findIndex((todo) => todo === todoToFind);
  }

  updateTodo(index: number, newTodo: ToDo) {
    let todos = this.todosSubject.value;
    todos[index] = newTodo;
    this.todosSubject.next(todos);
  }

  getTodoByIndex(index: number) {
    return this.todosSubject.value[index];
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todosSubject.value));
  }
}
