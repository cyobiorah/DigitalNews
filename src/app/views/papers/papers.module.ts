import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PapersListComponent } from './papers-list/papers-list.component';
import { UploadPapersComponent } from './upload-papers/upload-papers.component';
import { PapersRoutingModule } from './papers-routing.module';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        PapersRoutingModule
    ],
    declarations: [
        PapersListComponent,
        UploadPapersComponent
    ]
})
export class PapersModule { }