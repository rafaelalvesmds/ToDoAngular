import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //<app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public todos: any[] = [];


  constructor() {
    this.todos.push('study')
    this.todos.push({message: 'json' })
    this.todos.push(1995)
  }
}
