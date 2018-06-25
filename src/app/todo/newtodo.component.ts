import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Todo } from './todo.model';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.css']
})
export class NewTodoComponent {

  newTodoForm: FormGroup;
  todos: Todo[] = [];

  constructor() {
    this.newTodoForm = new FormGroup({
      newTodo: new FormControl(null, [Validators.required, Validators.minLength(1)])
    });
  }

  onAddTodo() {
    let todoDescription = this.newTodoForm.value.newTodo;
    if (todoDescription) {
      this.todos.push(new Todo(todoDescription, false));
      this.newTodoForm.controls['newTodo'].setValue('');
    }
  }
}
