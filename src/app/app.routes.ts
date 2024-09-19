import { Routes } from '@angular/router';
import { MainPageComponent } from './page/main-page/main-page.component';
import { CreateTodoPageComponent } from './page/create-todo-page/create-todo-page.component';
import { EditTodoPageComponent } from './page/edit-todo-page/edit-todo-page.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
  },
  {
    path: 'create',
    component: CreateTodoPageComponent,
  },
  {
    path: 'edit/:index',
    component: EditTodoPageComponent,
  },
  {
    path: '**',
    redirectTo: 'main',
  },
];
