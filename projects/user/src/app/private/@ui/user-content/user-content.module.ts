import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserContentComponent} from './page/user-content/user-content.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: UserContentComponent}
];

@NgModule({
  declarations: [UserContentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UserContentModule {
}
