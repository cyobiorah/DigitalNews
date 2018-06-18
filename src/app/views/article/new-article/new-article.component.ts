import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { CategoryService } from '../../../services/category.service';
import { ArticleService } from '../../../services/article.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
    templateUrl: './new-article.component.html',
    styleUrls: ['./new-article.component.css'],
    providers: [CategoryService, ArticleService]
})
export class NewArticleComponent implements OnInit {

    articleForm: FormGroup;
    loading: boolean = false;
    formSubmitAttempt: boolean = false;
    categorys: any[] = [];

    constructor(public fb: FormBuilder, public categorySrv: CategoryService, public articleSrv: ArticleService, public toastr: ToastrService, public router: Router) {

        this.articleForm = fb.group({
            'category': ['', Validators.required],
            'title': ['', Validators.required],
            'content': ['', Validators.required]
        })
    }

    ngOnInit() {

        this.fetchCategorys();
    }

    fetchCategorys() {

        this.categorySrv.fetchCategorys().subscribe(res => {

            this.categorys = res.data;
            console.log(this.categorys);
        }, err => {

            console.log(err);
        })
    }

    createArticle() {

        this.formSubmitAttempt = true;
        if (this.articleForm.valid) {

            this.loading = true;
            this.articleSrv.createArticle(this.articleForm.value).subscribe(res => {
                
                // console.log(res);
                this.toastr.success(res.message);
                this.router.navigateByUrl('article/article-listing');
                this.loading = false;
            }, err => {

                this.toastr.error('Something went wrong, try again!');
                this.loading = false;
                console.log(err);
            })
        }
    }
}