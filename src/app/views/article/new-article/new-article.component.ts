import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
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
    feature_img: any;
    category: any;
    title: any;
    content: any;
    feature_image_caption: any;
    loading: boolean = false;
    formSubmitAttempt: boolean = false;
    categorys: any[] = [];

    constructor(public fb: FormBuilder, public categorySrv: CategoryService, public articleSrv: ArticleService, public toastr: ToastrService, public router: Router) {

        // this.articleForm = fb.group({
        //     'category': ['', Validators.required],
        //     'title': ['', Validators.required],
        //     'content': ['', Validators.required],
        //     // 'feature_img': [''],
        //     'feature_image_caption': ['', Validators.required],

        // })

        // this.articleForm = new FormGroup({
        //     feature_img: new FormControl(),
        //     category: new FormControl(),
        //     title: new FormControl(),
        //     content: new FormControl(),
        //     feature_image_caption: new FormControl()
        // })

        this.articleForm = fb.group({
            'category': ['', Validators.required],
            'title': ['', Validators.required],
            'content': ['', Validators.required],
            'feature_image_caption': ['', Validators.required],
            'feature_img': ['']
        });


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
        console.log(this.articleForm.value);

        console.log(this.feature_img);

        console.log(this.articleForm.controls['title'].value);

        let formData = new FormData();

        formData.append('feature_img', this.feature_img);
        formData.append('category', this.articleForm.controls['category'].value);
        formData.append('title', this.articleForm.controls['title'].value);
        formData.append('content', this.articleForm.controls['content'].value);
        formData.append('feature_image_caption', this.articleForm.controls['feature_image_caption'].value);

        console.log(formData);

        if (this.articleForm.valid) {




            this.loading = true;
            this.articleSrv.createArticle(formData).subscribe(res => {

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

    // addDocument($event) {
    //     let files = $event.target.files;
    //     this.feature_img = files[0];
    //     console.log(this.feature_img.name);

    //     let formData = new FormData();

    //     formData.append('feature_img', files, this.feature_img.name)
    // }

    addDocument(evt: any) {

        let file: FileList = evt.target.files[0];

        this.feature_img = file ? file : undefined;

        console.log(this.feature_img);
    }
}