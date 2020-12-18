import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warmer',
  templateUrl: './warmer.component.html',
  styleUrls: ['./warmer.component.css']
})
export class WarmerComponent implements OnInit {
  users$: [];
  constructor() { }
  add() { }
  query() { }
  select(user) { }
  ngOnInit(): void {
  }

}
