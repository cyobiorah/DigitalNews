import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListingComponent } from './article-listing/article-listing.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

@NgModule({
    imports: [
        CommonModule,
        ArticleRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ArticleListingComponent,
        ArticleDetailsComponent,
        NewArticleComponent
    ]
})
export class ArticleModule { }