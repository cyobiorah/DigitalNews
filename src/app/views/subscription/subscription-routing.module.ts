// AuthGuard
import {
    AuthGuardService as AuthGuard
} from '../../auth/auth-guard.service';

//No AuthGuard
import {
    NoAuthGuardService as NoAuthGuard
} from '../../auth/no-auth-guard.service';

import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Subscriptions'
        },
        children: [
            {
                path: 'subscription-list',
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubscriptionRoutingModule { }