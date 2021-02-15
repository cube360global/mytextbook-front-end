import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../../../../lib/vendors/src/lib/material/material.module';
import {PrimengModule} from '../../../../lib/vendors/src/lib/primeng/primeng.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ValdemortModule} from 'ngx-valdemort';
import {ContentManagementComponent} from './page/content-management/content-management.component';
import {ContentListComponent} from './component/content-list/content-list.component';
import {Path} from '../@core/enum/path.enum';
import {ContentTableComponent} from './component/content-list/content-table/content-table.component';
import {ContentAddComponent} from './component/content-add/content-add.component';
import {ContentViewComponent} from './component/content-view/content-view.component';
import {ContentAddFormComponent} from './component/content-add/content-add-form/content-add-form.component';
import {ContentEditComponent} from './component/content-edit/content-edit.component';
import {ContentAddFormDevComponent} from './component/content-add/content-add-form-dev/content-add-form-dev.component';
import {CoreModule} from '../@core/core.module';
import {ContentQuestionComponent} from './component/content-view/content-question/content-question.component';
import {ContentQuestionEditComponent} from './component/content-view/content-question/content-question-edit/content-question-edit.component';


const routes: Routes = [
  {
    path: '', component: ContentManagementComponent, children: [
      {path: '', redirectTo: Path.All, pathMatch: 'full'},
      {path: Path.All, component: ContentListComponent},
      {path: Path.Add, component: ContentAddComponent},
      {path: ':id', component: ContentViewComponent},
    ]
  },
];

@NgModule({
  declarations: [
    ContentManagementComponent,
    ContentListComponent,
    ContentTableComponent,
    ContentAddComponent,
    ContentViewComponent,
    ContentAddFormComponent,
    ContentEditComponent,
    ContentAddFormDevComponent,
    ContentQuestionComponent,
    ContentQuestionEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    ValdemortModule,
    CoreModule
  ]
})
export class ContentModule {
}
