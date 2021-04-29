import { Component } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[] = [];

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.http.get<{ data: User[] }>('https://reqres.in/api/users').subscribe((res) => {
      console.log(res);
      this.users = res.data;
    })
  }
}
