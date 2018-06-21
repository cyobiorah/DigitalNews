import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';
import { CreateSubscriptionComponent } from './create-subscription/create-subscription.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SubscriptionRoutingModule
    ],
    declarations: [
        SubscriptionListComponent,
        CreateSubscriptionComponent
    ]
})
export class SubscriptionModule { }