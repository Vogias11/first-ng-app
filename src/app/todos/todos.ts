import { Component,inject,signal,OnInit } from '@angular/core';
import { TodosServices } from '../services/todos';
import { Todo } from '../components/model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit {
  todoService = inject(TodosServices);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
   this.todoService.getTodosFromApi()
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
    .subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }
}
