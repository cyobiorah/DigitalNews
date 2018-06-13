import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
    templateUrl: 'new-article.component.html'
})
export class NewArticleComponent implements OnInit {

    name = 'ng2-ckeditor';
    ckeConfig: any;
    articleContent: string;
    log: string = '';
    @ViewChild("myckeditor") ckeditor: any;

    constructor() {

        this.articleContent = `<p>My html content</p>`;
    }

    ngOnInit() {

        this.ckeConfig = {
            allowedContent: true,
            extraPlugins: 'divarea'
        };
    }

    onChange($event: any): void {
        console.log("onChange");
        //this.log += new Date() + "<br />";
    }
}