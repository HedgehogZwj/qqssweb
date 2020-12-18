import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addhum',
  templateUrl: './addhum.component.html',
  styleUrls: ['./addhum.component.css']
})
export class AddhumComponent implements OnInit {

  users$: [];
  constructor() { }
  add() { }
  query() { }
  select(user) { }

  ngOnInit(): void {
  }

}
