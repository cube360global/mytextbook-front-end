import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {MaterialModule} from '../../../../../../lib/vendors/src/lib/material/material.module';
import {Path} from '../../../@core/enum/path.enum';
import {UserSharedModule} from '../../shared/user-shared.module';
import {UserContentComponent} from './layout/user-content/user-content.component';
import {UserBookComponent} from './book/page/user-book.component';
import {BookListComponent} from './book/components/book-list/book-list.component';
import {UserAuthGuard} from '../../../@core/guards/user-auth.guard';
import {BookItemComponent} from './book/components/book-list/book-item/book-item.component';
import {SearchBooksComponent} from './book/components/search-books/search-books.component';

const routes: Routes = [{
  path: '', component: UserContentComponent, canActivate: [UserAuthGuard], children: [
    {path: '', redirectTo: Path.Books, pathMatch: 'full'},
    {path: Path.Books, component: UserBookComponent}
  ]
}];

@NgModule({
  declarations: [
    UserContentComponent,
    UserBookComponent,
    BookListComponent,
    BookItemComponent,
    SearchBooksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserSharedModule,
    MaterialModule,
    DropdownModule,
    ReactiveFormsModule
  ]
})

export class UserContentModule {
}
