import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.css']
})
export class NewTodoComponent {

  newTodoForm: FormGroup;

  constructor() {
    this.newTodoForm = new FormGroup({
      newTodo: new FormControl(null, [Validators.required, Validators.minLength(1)])
    });
  }

}
