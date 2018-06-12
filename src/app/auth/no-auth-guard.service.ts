import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Location } from '@angular/common';


@Injectable()
export class NoAuthGuardService implements CanActivate {

    previousUrl: string;
    constructor(public router: Router, private _location: Location) {

    }
    canActivate(): boolean {

        if (localStorage.getItem('user')) {

            this._location.back();

        }
        return true;
    }
}