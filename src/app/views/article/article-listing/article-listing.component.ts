import { Component, OnInit } from "@angular/core";
import { ArticleService } from '../../../services/article.service'

@Component({
    templateUrl: './article-listing.component.html',
    styleUrls: ['./article-listing.component.css'],
    providers: [ArticleService]
})
export class ArticleListingComponent implements OnInit {

    articles: any[] = [];

    constructor(public articleSrv: ArticleService) { }

    ngOnInit() {

        this.fetchArticles();
    }

    fetchArticles() {

        this.articleSrv.fetchArticles().subscribe(res => {

            this.articles = res.data;
            console.log(this.articles);
        }, err => {

            console.log(err);
        })
    }
}