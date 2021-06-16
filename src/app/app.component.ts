import { UserService } from './service/user.service';
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
    private http: HttpClient,
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
    })
  }
}
