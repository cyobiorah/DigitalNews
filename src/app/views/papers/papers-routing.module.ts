// AuthGuard
import {
    AuthGuardService as AuthGuard
} from '../../auth/auth-guard.service';

import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router';
import { PapersListComponent } from './papers-list/papers-list.component';
import { UploadPapersComponent } from './upload-papers/upload-papers.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Papers'
        },
        children: [
            {
                path: 'papers-list',
                component: PapersListComponent,
                canActivate: [AuthGuard],
                data: {
                    title: 'Papers List'
                }
            },
            {
                path: 'upload-papers',
                component: UploadPapersComponent,
                canActivate: [AuthGuard],
                data: {
                    title: 'Upload Papers'
                }
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PapersRoutingModule { }