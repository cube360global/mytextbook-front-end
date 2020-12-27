import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../../../../lib/vendors/src/lib/material/material.module';
import {PrimengModule} from '../../../../lib/vendors/src/lib/primeng/primeng.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ValdemortModule} from 'ngx-valdemort';
import {BooksListComponent} from './component/books-list/books-list.component';
import {AddBookComponent} from './component/add-book/add-book.component';


const routes: Routes = [
 // {path: '', component: BookManagementComponent},
];

@NgModule({
  declarations: [BooksListComponent, AddBookComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    ValdemortModule
  ]
})
export class BookModule {
}
