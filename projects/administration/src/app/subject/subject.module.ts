import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../../../../lib/vendors/src/lib/material/material.module';
import {PrimengModule} from '../../../../lib/vendors/src/lib/primeng/primeng.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ValdemortModule} from 'ngx-valdemort';
import {SubjectManagerComponent} from './page/subject-manager/subject-manager.component';
import {SubjectListComponent} from './component/subject-list/subject-list.component';
import {AddSubjectComponent} from './component/add-subject/add-subject.component';

const routes: Routes = [
  {path: '', component: SubjectManagerComponent},
];

@NgModule({
  declarations: [SubjectManagerComponent, SubjectListComponent, AddSubjectComponent],
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
export class SubjectModule {
}
