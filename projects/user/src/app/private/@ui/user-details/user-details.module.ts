import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {MaterialModule} from '../../../../../../lib/vendors/src/lib/material/material.module';
import {PrimengModule} from '../../../../../../lib/vendors/src/lib/primeng/primeng.module';
import {UserSharedModule} from '../../shared/user-shared.module';
import {Path} from '../../../@core/enum/path.enum';
import {UserSidebarComponent} from './layout/user-sidebar/user-sidebar.component';
import {UserProfileComponent} from './user-profile/page/user-profile.component';
import {UserProfileResetPwdComponent} from './user-profile/components/user-profile-reset-pwd/user-profile-reset-pwd.component';
import {UserProfileFormComponent} from './user-profile/components/user-profile-form/user-profile-form.component';
import {SubscriptionsComponent} from './user-subscriptions/page/subscriptions.component';
import {SubscriptionListComponent} from './user-subscriptions/components/subscription-list/subscription-list.component';
import {SubscriptionItemComponent} from './user-subscriptions/components/subscription-list/subscription-item/subscription-item.component';
import {BookContentComponent} from './user-subscriptions/components/book-content/book-content.component';
import {VideoPlayerComponent} from './user-subscriptions/components/video-player/video-player.component';
import {VideoItemComponent} from './user-subscriptions/components/book-content/video-item/video-item.component';
import {UserWatchHistoryComponent} from './user-watch-history/page/user-watch-history.component';
import {UserWatchHistoryItemComponent} from './user-watch-history/component/user-watch-history-item/user-watch-history-item.component';
import {VendorsModule} from '../../../../../../lib/vendors/src/lib/vendors.module';
import {UserAuthGuard} from '../../../@core/guards/user-auth.guard';
import { UserProfileWatchHistoryComponent } from './user-profile/components/user-profile-watch-history/user-profile-watch-history.component';

const routes: Routes = [
  {
    path: '', component: UserSidebarComponent, canActivate: [UserAuthGuard], children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: UserProfileComponent},
      {
        path: Path.Subscriptions, component: SubscriptionsComponent, canActivate: [UserAuthGuard], children: [
          {path: '', redirectTo: Path.All, pathMatch: 'full'},
          {path: Path.All, component: SubscriptionListComponent},
          {path: Path.BookContent + '/:id', component: BookContentComponent}
        ]
      },
      {path: Path.History, component: UserWatchHistoryComponent, canActivate: [UserAuthGuard]}
    ]
  },
  {path: Path.VideoPlayer + '/:contentId/:userId/:id', canActivate: [UserAuthGuard], component: VideoPlayerComponent}
];

@NgModule({
  declarations: [
    UserSidebarComponent,
    UserProfileComponent,
    UserProfileResetPwdComponent,
    UserProfileFormComponent,
    SubscriptionsComponent,
    SubscriptionListComponent,
    SubscriptionItemComponent,
    BookContentComponent,
    VideoPlayerComponent,
    VideoItemComponent,
    UserWatchHistoryComponent,
    UserWatchHistoryItemComponent,
    UserProfileWatchHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    PrimengModule,
    UserSharedModule,
    FormsModule,
    ReactiveFormsModule,
    VendorsModule,
    MatPasswordStrengthModule
  ]
})
export class UserDetailsModule {
}
