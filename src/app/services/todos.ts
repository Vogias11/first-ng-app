import { Injectable } from '@angular/core';
import { Todo } from '../components/model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosServices {
  todoItems: Array<Todo> = [
    {
    title: 'groseries',
    id: 0,
    userId: 1,
    completed: false

},
{
  title: 'car wash',
  id: 1,
  userId: 1,
  completed: false

}
]
  constructor() { }
}
