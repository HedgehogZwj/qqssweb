import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  userName$;
  ngOnInit(): void {
    this.userName$ = this.authService.currentUser;
  }
  exit() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
