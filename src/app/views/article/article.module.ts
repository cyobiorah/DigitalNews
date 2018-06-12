import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Category Routing
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListingComponent } from './article-listing/article-listing.component';

@NgModule({
    imports: [
        CommonModule,
        ArticleRoutingModule
    ],
    declarations: [
        ArticleListingComponent
    ]
})
export class ArticleModule { }