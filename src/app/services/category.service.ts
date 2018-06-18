import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Globals } from '../shared/api';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

    catgoryUrl = this.globals.CATEGORY_URL;
    authToken = localStorage.getItem('token')

    constructor(private http: HttpClient, private globals: Globals) { }

    createCategory(data: any): Observable<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Authorization': 'JWT ' + this.authToken
            })
        }

        return this.http.post(this.catgoryUrl, data, httpOptions)
    }

    fetchCategorys(): Observable<any> {

        return this.http.get(this.catgoryUrl)
    }
}