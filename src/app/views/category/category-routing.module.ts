import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCategoryComponent } from './new-category/new-category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Category'
    },
    children: [
      {
        path: 'new-category',
        component: NewCategoryComponent,
        data: {
          title: 'New Category'
        }
      },
      {
        path: 'category-details',
        component: CategoryDetailsComponent,
        data: {
          title: 'Category Details'
        }
      },
      {
        path: 'category-listing',
        component: CategoryListingComponent,
        data: {
          title: 'Category Listing'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
