import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
 http = inject(HttpClient)
 //https://jsonplaceholder.typicode.com/todos
  constructor() { }
  getTodos(){
    return this.http.get<Array<Todo>>("https://jsonplaceholder.typicode.com/todos");
  }
}
