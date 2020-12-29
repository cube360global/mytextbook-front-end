import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {MaterialModule} from '../../../../../../lib/vendors/src/lib/material/material.module';
import {Path} from '../../../@core/enum/path.enum';
import {UserSharedModule} from '../../shared/user-shared.module';
import {UserSubscriptionsComponent} from './layout/user-subscriptions/user-subscriptions.component';
import {SubscriptionsComponent} from './subscriptions/page/subscriptions.component';
import {SearchBooksComponent} from './subscriptions/components/search-books/search-books.component';
import { SubjectsListComponent } from './subscriptions/components/subjects-list/subjects-list.component';
import {BookListComponent} from './subscriptions/components/subjects-list/book-list/book-list.component';
import {BookItemComponent} from './subscriptions/components/subjects-list/book-list/book-item/book-item.component';

const routes: Routes = [{
  path: '', component: UserSubscriptionsComponent, children: [
    {path: '', redirectTo: Path.Subscriptions, pathMatch: 'full'},
    {path: Path.Subscriptions, component: SubscriptionsComponent}
  ]
}];

@NgModule({
  declarations: [
    UserSubscriptionsComponent,
    SubscriptionsComponent,
    SearchBooksComponent,
    BookListComponent,
    BookItemComponent,
    SubjectsListComponent
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

export class UserSubscriptionsModule {
}
