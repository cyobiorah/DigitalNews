import { Component, OnInit } from "@angular/core";
import { PaperServices } from "../../../services/paper.services";

@Component({
    templateUrl: './papers-list.component.html',
    styleUrls: ['./papers-list.component.css'],
    providers: [PaperServices]
})
export class PapersListComponent implements OnInit {

    papers: any[] = [];

    constructor(public paperSrv: PaperServices) { }

    ngOnInit() {

        this.fetchPapers();
    }

    fetchPapers() {

        this.paperSrv.fetchPapers().subscribe(res => {

            this.papers = res.data;
            console.log(this.papers);
        }, err => {

            console.log(err);
        })
    }
}