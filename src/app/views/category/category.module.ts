import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NewCategoryComponent } from './new-category.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Category Routing
import { CategoryRoutingModule } from './category-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    CategoryRoutingModule
  ],
  declarations: [
    NewCategoryComponent
  ]
})
export class CategoryModule { }
