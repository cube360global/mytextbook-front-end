import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./+auth/user-auth.module').then(m => m.UserAuthModule)},
  {path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
