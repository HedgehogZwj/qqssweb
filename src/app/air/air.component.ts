import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.css']
})
export class AirComponent implements OnInit {

  users$: [];
  constructor() { }
  add() { }
  query() { }
  select(user) { }

  ngOnInit(): void {
  }

}