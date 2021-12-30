import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root', //<app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Minhas Tarefas';


  constructor() {
    this.todos.push(new Todo(1,'study', false));
    this.todos.push(new Todo(2,'ir ali', false));
    this.todos.push(new Todo(3, '1995', true));
  }

}
