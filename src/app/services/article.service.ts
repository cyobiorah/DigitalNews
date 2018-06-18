import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Globals } from '../shared/api';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleService {

    articleUrl = this.globals.ARTICLE_URL;
    authToken = localStorage.getItem('token');

    constructor(private http: HttpClient, private globals: Globals) { }

    createArticle(data: any): Observable<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Authorization': 'JWT ' + this.authToken
            })
        }

        return this.http.post(this.articleUrl, data, httpOptions)
    }

    fetchArticles(): Observable<any> {

        return this.http.get(this.articleUrl)
    }
}