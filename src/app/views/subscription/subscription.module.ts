import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        SubscriptionRoutingModule
    ],
    declarations: [
        SubscriptionListComponent
    ]
})
export class SubscriptionModule { }