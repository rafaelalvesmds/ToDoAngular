import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //<app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public todos: any[] = [];
  public title: String = 'Minhas Tarefas';


  constructor() {
    this.todos.push('study');
    this.todos.push({"message": "json" });
    this.todos.push(1995);
  }

  alterarTitulo() {
    this.title = "Mudei"
  }
}
