import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCategoryComponent } from './new-category/new-category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';

// AuthGuard
import {
  AuthGuardService as AuthGuard
} from '../../auth/auth-guard.service';

//No AuthGuard
import {
  NoAuthGuardService as NoAuthGuard
} from '../../auth/no-auth-guard.service';



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
        canActivate: [AuthGuard],
        data: {
          title: 'New Category'
        }
      },
      {
        path: 'category-details',
        component: CategoryDetailsComponent,
        canActivate: [AuthGuard],
        data: {
          title: 'Category Details'
        }
      },
      {
        path: 'category-listing',
        component: CategoryListingComponent,
        canActivate: [AuthGuard],
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
export class CategoryRoutingModule { }
