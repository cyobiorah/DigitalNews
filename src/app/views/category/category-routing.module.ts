import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCategoryComponent } from './new-category.component';



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
    //   {
    //     path: 'dropdowns',
    //     component: DropdownsComponent,
    //     data: {
    //       title: 'Dropdowns'
    //     }
    //   },
    //   {
    //     path: 'brand-buttons',
    //     component: BrandButtonsComponent,
    //     data: {
    //       title: 'Brand buttons'
    //     }
    //   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
