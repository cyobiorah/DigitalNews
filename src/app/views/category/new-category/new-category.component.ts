import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../services/category.service';

@Component({
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css'],
  providers: [CategoryService]
})
export class NewCategoryComponent {

  categoryForm: FormGroup;
  name: string = '';
  loading: boolean = false;
  formSubmitAttempt: boolean = false;

  constructor(public fb: FormBuilder, public router: Router, public toastr: ToastrService, public categorySrv: CategoryService) {

    this.categoryForm = fb.group({
      'name': ['', Validators.required]
    })
  }

  createCategory() {

    this.formSubmitAttempt = true;
    if (this.categoryForm.valid) {

      this.loading = true;
      this.categorySrv.createCategory(this.categoryForm.value).subscribe( res => {
        
        // console.log(res);
        this.toastr.success(res.message);
        this.router.navigateByUrl('category/category-listing');
        this.loading = false;
      }, err => {
        
        this.toastr.error('Something went wrong, try again!');
        this.loading = false;
        console.log(err);
      })
    }
  }

}
