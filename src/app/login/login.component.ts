import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.loginForm = this.formBuilder.group({
      email: ['',[ Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get emailInvalid(){
    return this.loginForm.get('email')?.invalid && this.loginForm.get('email')?.touched;
  }

  get passwordInvalid(){
    return this.loginForm.get('password')?.invalid && this.loginForm.get('password')?.touched;
  }
}
