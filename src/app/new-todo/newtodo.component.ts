import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.css']
})

export class NewTodoComponent {
  newTodoForm: FormGroup;
  showError: boolean;

  constructor(private todoService: TodoService) {
    this.newTodoForm = new FormGroup({
      newTodo: new FormControl(null, Validators.required)
    });
  }

  onAddTodo() {
    let todoDescription = this.newTodoForm.value.newTodo;
    if (todoDescription) {
      this.showError = false;

      let todo = new Todo(todoDescription, false);

      this.todoService.addTodo(todo);

      this.newTodoForm.controls['newTodo'].setValue('');
    } else {
      this.showError = true;
    }
  }
}
