import { Component, OnInit } from "@angular/core";
import { SubscriptionService } from "../../../services/subscription.service";

@Component({
    templateUrl: './subscription-list.component.html',
    styleUrls: ['./subscription-list.component.css'],
    providers: [SubscriptionService]
})
export class SubscriptionListComponent implements OnInit {

    subscriptions: any[] = [];

    constructor(public subSrv: SubscriptionService) { }

    ngOnInit() {

        this.fetchSubscription();
    }

    fetchSubscription() {

        this.subSrv.fetchSubscription().subscribe(res => {

            this.subscriptions = res.data;
            console.log(this.subscriptions);
        }, err => {

            console.log(err);
        })
    }
}