import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Path} from './@core/enum/path.enum';
import {UserAuthGuard} from './@core/guards/user-auth.guard';
import {AuthHomeComponent} from './+auth/home/auth-home/auth-home.component';
import {SignInComponent} from './+auth/components/sign-in/sign-in.component';
import {SignUpComponent} from './+auth/components/sign-up/sign-up.component';
import {ForgetPasswordComponent} from './+auth/components/forget-password/forget-password.component';
import {ResetPasswordComponent} from './+auth/components/reset-password/reset-password.component';
import {PublicHomePageComponent} from './public/components/public-home-page/public-home-page.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: Path.Auth, pathMatch: 'full'
  },
  {
    path: Path.Auth, component: AuthHomeComponent, children: [
      {path: '', component: SignInComponent},
      {path: Path.SignUp, component: SignUpComponent},
      {path: Path.ForgotPassword, component: ForgetPasswordComponent},
      {path: Path.PasswordReset, component: ResetPasswordComponent},
      {path: Path.AboutUs, component: PublicHomePageComponent}
    ]
  },
  {
    path: Path.Public, loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: Path.Private, loadChildren: () => import('./private/private.module').then(m => m.PrivateModule), canActivate: [UserAuthGuard]
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
