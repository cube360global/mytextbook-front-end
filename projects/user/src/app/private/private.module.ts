import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Path} from '../@core/enum/path.enum';


const routes: Routes = [
  {path: '', redirectTo: Path.UserDetails, pathMatch: 'full'},
  {
    path: Path.UserDetails,
    loadChildren: () => import('./@ui/user-details/user-details.module').then(m => m.UserDetailsModule)
  },
  {
    path: Path.Content,
    loadChildren: () => import('./@ui/user-content/user-content.module').then(m => m.UserContentModule)
  }
];

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PrivateModule {
}
