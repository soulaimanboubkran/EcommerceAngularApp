import { Component } from '@angular/core';
import { Todo } from '../model/todo.type';
import { TodosService } from '../services/todos.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos : Todo[] = [];
  constructor(private todosService:TodosService){}
   
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.todosService.getTodos().pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((items)=>{
      this.todos = items;
    })
  }
}
