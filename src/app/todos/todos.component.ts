import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
@Component({
  selector: 'todo-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {
  todos: any = [];

  constructor(private TodosService: TodosService) { }

  ngOnInit() {
    this.TodosService.getAllPosts().subscribe(todos=> {
      this.todos = todos;
    })
  }

}
