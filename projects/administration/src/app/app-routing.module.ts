import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLoginComponent} from './+auth/components/admin-login/admin-login.component';
import {Path} from './@core/enum/path.enum';
import {NavBarComponent} from './@ui/layout/component/nav-bar/nav-bar.component';
import {AdminAuthGuard} from './@core/guards/admin-auth.guard';
import {DevTestComponent} from './dev-test/dev-test.component';

const routes: Routes = [
  {path: '', component: AdminLoginComponent},
  {path: 'dev', component: DevTestComponent},
  {
    path: Path.Admin, component: NavBarComponent, canActivate: [AdminAuthGuard], children: [
      {path: '', redirectTo: Path.Dashboard, pathMatch: 'full'},
      {path: Path.Dashboard, loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: Path.Users, loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
      {path: Path.Content, loadChildren: () => import('./content/content.module').then(m => m.ContentModule)},
      {path: Path.Book, loadChildren: () => import('./book/book.module').then(m => m.BookModule)},
      {path: Path.Subject, loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule)},
      {path: Path.Commission, loadChildren: () => import('./commission/commission.module').then(m => m.CommissionModule)},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
