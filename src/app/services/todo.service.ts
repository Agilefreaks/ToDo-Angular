import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodoService {

  private todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  removeTodoWith(uuid: string) {
    let result: Todo[] = this.todos.filter(todo => todo.uuid == uuid)

    let indexOfTodo = this.todos.indexOf(result[0]);
    if (indexOfTodo > -1) {
      this.todos.splice(indexOfTodo, 1);
    }
  }

}