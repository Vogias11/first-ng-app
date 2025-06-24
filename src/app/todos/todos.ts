import { Component,inject,signal,OnInit } from '@angular/core';
import { TodosServices } from '../services/todos';
import { Todo } from '../components/model/todo.type';
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';


@Component({
  selector: 'app-todos',
  imports: [TodoItem],
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
  updateTodoItem(todoItem: Todo) {
  this.todoItems.update((todos) => {
  return todos.map(todo => {
    if (todo.id === todoItem.id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
    return todo; // Always return something
  });
});
  }
}
