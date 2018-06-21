import {Injectable} from '@angular/core';

Injectable()
export class Globals {
    HOST_URL = 'http://45.79.136.105:8004';
    LOGIN_URL = this.HOST_URL + '/login/';
    CATEGORY_URL = this.HOST_URL + '/categorys/';
    ARTICLE_URL = this.HOST_URL + '/articles/';
    SUBSCRIPTION_URL = this.HOST_URL + '/packages/';
    PAPERS_URL = this.HOST_URL + '/papers/';
}