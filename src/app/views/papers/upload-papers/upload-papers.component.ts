import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaperServices } from "../../../services/paper.services";

@Component({
    templateUrl: './upload-papers.component.html',
    styleUrls: ['./upload-papers.component.css'],
    providers: [PaperServices]
})
export class UploadPapersComponent implements OnInit {

    uploadForm: FormGroup;
    paper: FormControl;
    loading: boolean = false;
    formSubmitAttempt: boolean = false;

    constructor(public fb: FormBuilder, public router: Router, public toastr: ToastrService, public paperSrv: PaperServices) {

        // this.uploadForm = fb.group({
        //     'paper': ['']
        // })

        this.uploadForm = new FormGroup({
            paper: new FormControl()
        });
    }

    ngOnInit() { }

    uploadFile() {

        this.formSubmitAttempt = true;
        if (this.paper) {

            this.loading = true;
            // console.log(this.paper);
            
            this.paperSrv.addPaper(this.paper).subscribe(res => {
                
                this.toastr.success(res.message);
                this.router.navigateByUrl('papers/papers-list');
                this.loading = false;
            }, err => {

                console.log(err);
                this.toastr.error(err.message)
            })

        }
    }

    addDocument($event) {
        let files = $event.target.files || $event.srcElement.files;
        this.paper = files[0];
        // console.log(this.paper);
    }
}