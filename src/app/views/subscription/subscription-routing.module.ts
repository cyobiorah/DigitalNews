// AuthGuard
import {
    AuthGuardService as AuthGuard
} from '../../auth/auth-guard.service';

import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';
import { CreateSubscriptionComponent } from './create-subscription/create-subscription.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Subscriptions'
        },
        children: [
            {
                path: 'subscription-list',
                component: SubscriptionListComponent,
                canActivate: [AuthGuard],
                data: {
                    title: 'Subscription List'
                }
            },
            {
                path: 'create-subscription',
                component: CreateSubscriptionComponent,
                canActivate: [AuthGuard],
                data: {
                    title: 'Create Subscription'
                }
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubscriptionRoutingModule { }