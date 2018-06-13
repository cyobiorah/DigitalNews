import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Category Routing
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListingComponent } from './article-listing/article-listing.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { ArticleDetailsComponent } from './article-details/article-details.component';

@NgModule({
    imports: [
        CommonModule,
        ArticleRoutingModule,
        FormsModule,
        CKEditorModule
    ],
    declarations: [
        ArticleListingComponent,
        ArticleDetailsComponent,
        NewArticleComponent
    ]
})
export class ArticleModule { }