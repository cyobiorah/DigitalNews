import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Category Routing
import { CategoryRoutingModule } from './category-routing.module';

import { NewCategoryComponent } from './new-category/new-category.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

// Angular

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CategoryRoutingModule
  ],
  declarations: [
    NewCategoryComponent,
    CategoryListingComponent,
    CategoryDetailsComponent
  ]
})
export class CategoryModule { }
