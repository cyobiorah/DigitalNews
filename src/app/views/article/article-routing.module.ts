import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router';
import { ArticleListingComponent } from "./article-listing/article-listing.component";

const routes: Routes= [
    {
        path: '',
        data: {
            title: 'Article'
        },
        children: [
            {
                path: 'article-listing',
                component: ArticleListingComponent,
                data: {
                    title: 'Article Listing'
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