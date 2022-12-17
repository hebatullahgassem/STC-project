import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInvalid = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder) { 
  }

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });


  ngOnInit() {
  }

  onLogIn(){
    if(this.loginForm.value.email && this.loginForm.value.password){

      if(this.loginService.getEmp(this.loginForm.value.email, this.loginForm.value.password)){
        this.router.navigate(['/access-page']);
      } else {
        this.userInvalid = true;
      }
    }
  }

}