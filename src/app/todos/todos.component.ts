import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {
  todos = [];
  constructor(private TodosService: TodosService) { }

  ngOnInit() {
    this.TodosService.getTodos().subscribe(todos=> {
      this.todos = todos;
    })
  }

}
