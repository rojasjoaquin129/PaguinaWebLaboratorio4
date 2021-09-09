import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login: any;

  constructor(private route:Router) { 
    this.login={
      email:'',
      password:''
     };
  }

  ngOnInit(): void {
  }

  sigiente(){
    console.log("siguiente");
    this.route.navigate(['home']);
  }
}
