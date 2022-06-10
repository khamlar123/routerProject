import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginModal = {
    user_name: '',
    password: ''
  }
  constructor(
    private api: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  loginFunc():void{
    this.api.login(this.loginModal).subscribe(res => {
        localStorage.setItem('token', res);
        (res === "login !!!!!")? this.router.navigate(['/']):alert('paaword ro user invalid');
    })
  }


}
