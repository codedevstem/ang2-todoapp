import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TodosService {

  constructor(private http: Http) { }

  getAllPosts() {
    return this.http.get('/api/todos')
    .map(res => res.json());
  }
}
