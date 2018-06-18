import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [UserService]
})
export class LoginComponent {
  
  email: string;
  password: string;
  loginForm: FormGroup;
  formSubmitAttempt: boolean;
  loading: boolean;

  constructor(public fb: FormBuilder, public router: Router, public userSrv: UserService, private toastr: ToastrService) {

    // let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

    this.loginForm = fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]]
    })
  }

  ngOnInit() { }

  login() {
    
    this.formSubmitAttempt = true;

    if (this.loginForm.valid) {

      this.loading = true;
      this.userSrv.login(this.loginForm.value).subscribe(res => {

        console.log(res.data);
        localStorage.setItem('authUser', JSON.stringify(res.data));
        localStorage.setItem('token', res.data.token);
        this.toastr.success('Logged In');
        this.router.navigateByUrl('');
        this.loading = false;
      }, err => {

        console.log(err.error.message);
        this.toastr.error(err.error.message, 'Error!');
        this.loading = false;
      })
    }
  }
  
}
