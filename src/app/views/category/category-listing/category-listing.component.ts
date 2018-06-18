import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../../../services/category.service";

@Component({
    templateUrl: './category-listing.component.html',
    styleUrls: ['./category-listing.component.css'],
    providers: [CategoryService]
})
export class CategoryListingComponent implements OnInit {

    categorys: any[] = [];

    constructor(public categorySrv: CategoryService) { }

    ngOnInit() {

        this.fetchCategorys();
    }

    fetchCategorys() {

        this.categorySrv.fetchCategorys().subscribe(res => {
            
            this.categorys = res.data;
            console.log(this.categorys);
        }, err => {

            console.log(err);
        })
    }
}