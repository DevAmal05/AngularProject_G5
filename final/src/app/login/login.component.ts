import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!:FormGroup;
  errorMessge: any;
  constructor(private fb:FormBuilder,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.loginform=this.fb.group({
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }
get email(){
  return this.loginform.get('email')
}
get password(){
  return this.loginform.get('password')
}

login(){
  const email=this.loginform.get('email').value;
  const password=this.loginform.get('password').value;
  this.authservice.signInUser(email,password).then(
    ()=>{
      this.router.navigate(['/home'])
    },
    (error) =>{
      this.errorMessge=error
    }
  )

}

}
