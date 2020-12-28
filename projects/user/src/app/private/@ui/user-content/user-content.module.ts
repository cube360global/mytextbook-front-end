import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Path} from '../../../@core/enum/path.enum';
import {UserSharedModule} from '../../shared/user-shared.module';
import {UserContentComponent} from './layout/user-content/user-content.component';
import {UserBookComponent} from './book/page/user-book/user-book.component';
import {BookListComponent} from './book/component/book-list/book-list.component';
import {BookItemComponent} from './book/component/book-list/book-item/book-item.component';
import {MaterialModule} from '../../../../../../lib/vendors/src/lib/material/material.module';

const routes: Routes = [{
  path: '', component: UserContentComponent, children: [
    {path: '', redirectTo: Path.Books, pathMatch: 'full'},
    {path: Path.Books, component: UserBookComponent}
  ]
}];

@NgModule({
  declarations: [
    UserContentComponent,
    UserBookComponent,
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserSharedModule,
    MaterialModule
  ]
})

export class UserContentModule {
}
