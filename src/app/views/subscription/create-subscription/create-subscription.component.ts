import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubscriptionService } from '../../../services/subscription.service';

@Component({
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.css'],
  providers: [SubscriptionService]
})
export class CreateSubscriptionComponent {

  subscriptionForm: FormGroup;
  loading: boolean = false;
  formSubmitAttempt: boolean = false;

  constructor(public fb: FormBuilder, public router: Router, public toastr: ToastrService, public subSrv: SubscriptionService) {

    this.subscriptionForm = fb.group({
        'amount': ['', Validators.required],
        'name': ['', Validators.required],
        'description': ['', Validators.required]
    })
  }

  createSubscription() {

    this.formSubmitAttempt = true;
    if (this.subscriptionForm.valid) {

      this.loading = true;
      this.subSrv.createSubscription(this.subscriptionForm.value).subscribe( res => {
        
        console.log(res);
        this.toastr.success(res.message);
        this.router.navigateByUrl('subscription/subscription-list');
        this.loading = false;
      }, err => {
        
        this.toastr.error('Something went wrong, try again!');
        this.loading = false;
        console.log(err);
      })
    }
  }

}
