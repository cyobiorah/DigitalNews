import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Globals } from '../shared/api';
import { Observable } from 'rxjs';

@Injectable()
export class SubscriptionService {

    subscriptionUrl = this.globals.SUBSCRIPTION_URL;
    authToken = localStorage.getItem('token');

    constructor(private http: HttpClient, private globals: Globals) { }

    createSubscription(data: any): Observable<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Authorization': 'JWT ' + this.authToken
            })
        }

        return this.http.post(this.subscriptionUrl, data, httpOptions)
    }

    fetchSubscription(): Observable<any> {

        return this.http.get(this.subscriptionUrl)
    }
}