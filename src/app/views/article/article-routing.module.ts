// AuthGuard
import {
    AuthGuardService as AuthGuard
} from '../../auth/auth-guard.service';

//No AuthGuard
import {
    NoAuthGuardService as NoAuthGuard
} from '../../auth/no-auth-guard.service';

import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router';
import { ArticleListingComponent } from "./article-listing/article-listing.component";
import { NewArticleComponent } from "./new-article/new-article.component";
import { ArticleDetailsComponent } from './article-details/article-details.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Article'
        },
        children: [
            {
                path: 'article-listing',
                component: ArticleListingComponent,
                canActivate: [AuthGuard],
                data: {
                    title: 'Article Listing'
                }
            },
            {
                path: 'new-article',
                component: NewArticleComponent,
                canActivate: [AuthGuard],
                data: {
                    title: 'New Article'
                }
            },
            {
                path: 'article-details',
                component: ArticleDetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    title: 'Article Details'
                }
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticleRoutingModule { }