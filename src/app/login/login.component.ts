import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  baseUrl = 'http://localhost:8000/';
  constructor(private hc: HttpClient, private router: Router, private authService: AuthService) { }
  login() {
    var userName = (<HTMLInputElement>document.getElementById('userName')).value;
    var password = (<HTMLInputElement>document.getElementById('password')).value;
    console.log(JSON.stringify({ userName: userName, password: password }));
    this.hc.post(this.baseUrl + 'login', { userName: userName, password: password }).subscribe((val: any) => {
      console.log(val);
      if (val.succ) {
        this.authService.login();
        this.authService.currentUser = userName;
        this.router.navigate(['/manager']);
      }
      else {
        alert('用户名或密码错误');
      }
    })
  }
  ngOnInit(): void {
  }
}
