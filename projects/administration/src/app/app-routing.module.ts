import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLoginComponent} from './+auth/components/admin-login/admin-login.component';
import {Path} from './@core/enum/path.enum';
import {NavBarComponent} from './@ui/layout/component/nav-bar/nav-bar.component';

const routes: Routes = [
  {path: '', component: AdminLoginComponent},
  {
    path: Path.Admin, component: NavBarComponent, children: [
      {path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
