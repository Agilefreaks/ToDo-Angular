import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NewTodoComponent } from './new-todo/newtodo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './services/todo.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NewTodoComponent,
        TodoComponent,
        TodoListComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        TodoService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
