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
    this.todosSubject.value[index].isCompleted = true;
  }

  findIndex(todoToFind: ToDo) {
    return this.todosSubject.value.findIndex((todo) => todo === todoToFind);
  }

  updateTodo(index: number, newTodo: ToDo) {
    this.todosSubject.value[index] = newTodo;
  }

  getTodoByIndex(index: number) {
    return this.todosSubject.value[index];
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todosSubject.value));
  }
}
