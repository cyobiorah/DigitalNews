import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  
  email: string;
  password: string;
  user: any = {};
  loginForm: FormGroup;
  formSubmitAttempt: boolean;
  loading: boolean;

  constructor(public fb: FormBuilder, public router: Router) {

    this.loginForm = fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]]
    })
  }

  ngOnInit() {

    // this.email = 'admin@enewsvendor';
    // this.password = 'password';
    // this.loginForm.controls['email'].setValue('admin@enewsvendor.com');
    // this.loginForm.controls['password'].setValue('password');
  }

  login() {
    
    this.loading = true;
    this.formSubmitAttempt = true;
    console.log('here');
    if (this.loginForm.controls['email'].value == 'admin@enewsvendor.com' && this.loginForm.controls['password'].value == 'password') {
      console.log(this.loginForm.controls['email'].value);
      console.log(this.loginForm.controls['password'].value);

      localStorage.setItem('user', this.loginForm.controls['email'].value);
      this.router.navigateByUrl('');
      this.loading = false;
    } else {
      console.log('check input fields');
      this.loading = false;
    }
  }
}
