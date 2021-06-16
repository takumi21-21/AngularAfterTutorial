import { User } from './../user';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

  @Input() user: User

  constructor() { }

  ngOnInit(): void {
  }

}
