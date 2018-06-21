import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Globals } from '../shared/api';
import { Observable } from 'rxjs';

@Injectable()
export class PaperServices {

    papersUrl = this.globals.PAPERS_URL;
    authToken = localStorage.getItem('token');
    headers = new HttpHeaders({'Authorization': 'JWT ' + this.authToken})

    constructor(private http: HttpClient, private globals: Globals) { }

    addPaper(data: any): Observable<any> {

        const headers = new HttpHeaders({'Authorization': 'JWT ' + this.authToken})

        let formData = new FormData();
        formData.append('paper', data, data.name)

        return this.http.post(this.papersUrl, formData, {headers})
    }

    fetchPapers(): Observable<any> {

        const headers = new HttpHeaders({'Authorization': 'JWT ' + this.authToken})

        return this.http.get(this.papersUrl)
    }
}