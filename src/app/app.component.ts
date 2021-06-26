import { UserService } from './service/user.service';
import { Component } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users = this.userService.users$;
  count: any;

  countObservable = new Observable(observer => {
    let _count = 0;
    setInterval(() => {
      _count++;
      observer.next(_count);
    }, 1000)
  })

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.userService.fetchUsers();
  }
}
