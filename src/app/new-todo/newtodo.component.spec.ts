import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTodoComponent } from './newtodo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TodoService } from '../services/todo.service';


describe('NewTodoComponent', () => {
  let component: NewTodoComponent;
  let fixture: ComponentFixture<NewTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewTodoComponent],
      providers: [
        {
          provide: TodoService,
          useClass: class {
            addTodo = jasmine.createSpy("addTodo")
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input should be empty initially', () => {
    const inputElement: HTMLElement = fixture.nativeElement;
    const input = inputElement.querySelector('input');

    expect(input.textContent).toEqual('');
  });

  it('#showError should be false initially', () => {
    expect(component.showError).toBe(false);
  });


  it('#onAddTodo with empty description should change value of #showError to true', () => {
    component.newTodoForm.controls['newTodo'].setValue('');

    component.onAddTodo();

    expect(component.showError).toBe(true);
  });

  it('#onAddTodo value of #showError should be false', () => {
    component.newTodoForm.controls['newTodo'].setValue('Todo description');

    component.onAddTodo();

    expect(component.showError).toBe(false);
  });

  it('#onAddTodo after add todo input should be empty', () => {
    component.newTodoForm.controls['newTodo'].setValue('Todo description');
    const inputElement: HTMLElement = fixture.nativeElement;
    const input = inputElement.querySelector('input');

    component.onAddTodo();

    expect(input.textContent).toEqual('');
  });

  it('#onAddTodo should call #addTodo service method with new todo as parameter', () => {
    let service = fixture.debugElement.injector.get(TodoService);
    const expectedDescription = 'Todo description';
    component.newTodoForm.controls['newTodo'].setValue(expectedDescription);

    component.onAddTodo();

    expect(service.addTodo).toHaveBeenCalledWith(
      jasmine.objectContaining({ description: expectedDescription, isChecked: false })
    );
  });
});
