import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Path} from "./@core/enum/path.enum";

const routes: Routes = [
  {path: '', loadChildren: () => import('./+auth/user-auth.module').then(m => m.UserAuthModule)},
  {path: Path.Public, loadChildren: () => import('./public/public.module').then(m => m.PublicModule)},
  {path: Path.Private, loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
