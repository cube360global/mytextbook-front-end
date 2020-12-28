import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserContentComponent} from './layout/user-content/user-content.component';
import {RouterModule, Routes} from '@angular/router';
import {Path} from '../../../@core/enum/path.enum';
import {UserBookComponent} from './book/page/user-book/user-book.component';
import {UserSharedModule} from '../../shared/user-shared.module';
import { BookListComponent } from './book/component/book-list/book-list.component';

const routes: Routes = [
  {
    path: '', component: UserContentComponent, children: [
      {path: '', redirectTo: Path.Books, pathMatch: 'full'},
      {path: Path.Books, component: UserBookComponent}
    ]
  }
];

@NgModule({
  declarations: [UserContentComponent, UserBookComponent, BookListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserSharedModule,
  ]
})
export class UserContentModule {
}
