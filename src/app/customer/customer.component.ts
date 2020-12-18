import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  baseUrl = 'http://localhost:8000/';
  constructor(private hc: HttpClient) { }
  update() {
    var userName = "zzy";
    var password = (<HTMLInputElement>document.getElementById('password')).value;
    var newpassword = (<HTMLInputElement>document.getElementById('newpassword')).value;
    var confirmpassword = (<HTMLInputElement>document.getElementById('confirmpassword')).value;
    if (newpassword.length < 6) alert('新密码长度不能小于6位')
    else if (newpassword === confirmpassword) {
      this.hc.post(this.baseUrl + 'login', { userName: userName, password: password }).subscribe((val: any) => {
        if (val.succ) {
          this.hc.post(this.baseUrl + 'update', { userName: userName, password: newpassword }).subscribe((val: any) => {
            if (val.succ) {
              alert('修改成功');
            }
            else {
              alert('修改失败');
            }
          })
        }
        else {
          alert('原密码错误');
        }
      })
    }
    else {
      alert('新密码与确认密码内容不一致')
    }
  }
  ngOnInit(): void {
  }

}
