import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TodoDetailComponent } from './components/pages/todo-detail/todo-detail.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: TodoComponent},
  { path: 'todos/:id', component: TodoDetailComponent},
  { path: 'about', component: AboutComponent }, 
  { path: '**', component: NotFoundComponent } 
];
  
