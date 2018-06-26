import { TestBed, inject } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { Todo } from '../models/todo.model';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });

    service = new TodoService();
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));

  it('#getTodos should return an empty array', () => {
    expect(service.getTodos().length).toEqual(0);
  });

  it('#addTodo should add one element to array', () => {
    let todo: Todo = new Todo("Todo #1");
    service.addTodo(todo);

    expect(service.getTodos().length).toEqual(1);
  });

  it('#removeTodoWithUuid should remove element from array by uuid', () => {
    let todo: Todo = new Todo("Todo #1");
    service.addTodo(todo);

    service.removeTodoWithUuid(todo.uuid);
    expect(service.getTodos().length).toEqual(0);
  });
});
