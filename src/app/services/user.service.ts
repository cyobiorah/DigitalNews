import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Globals } from '../shared/api';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    private loginUrl = this.globals.LOGIN_URL;

    constructor(private http: HttpClient, private globals: Globals) { }

    login(data: any): Observable<any> {
        
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

        return this.http.post(this.loginUrl, data, { headers })
    }
}