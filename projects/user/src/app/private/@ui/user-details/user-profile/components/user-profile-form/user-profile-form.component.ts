import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../app.reducer';
import {UserProfileModel} from '../../../../../../@core/interfaces/api/UserProfileModel';
import {UserProfileApiService} from '../../shared/service/user-profile-api.service';
import {USER_DATA_LOADED} from '../../store/user-profile.action';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent implements OnInit {

  userProfile = {} as UserProfileModel;
  signUpForm = {} as FormGroup;
  hide = true;
  firstName = '';
  lastname = '';
  email = '';

  constructor(private store: Store<fromApp.AppState>,
              public dialogRef: MatDialogRef<UserProfileFormComponent>,
              private userProfileApiService: UserProfileApiService) {
  }

  @HostListener('window:keydown', ['$event'])
  onClick(kbdEvent: KeyboardEvent): void {
    if (kbdEvent.code === 'Enter') {
      this.onSave();
    }
  }

  ngOnInit(): void {
    this.initForm();
    this.store.select(fromApp.getUserProfileReducer).subscribe(res => {
      if (res != null && res.user.id != null) {
        this.userProfile = res.user;
        this.patchForm(res.user);
      }
    });
  }

  initForm(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      telephoneNumber: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      birthDay: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      school: new FormControl(null, [Validators.required]),
      district: new FormControl(null, [Validators.required])
    });
  }

  patchForm(userProfile: UserProfileModel): void {
    this.signUpForm.patchValue({
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      telephoneNumber: userProfile.telephoneNumber,
      birthDay: new Date(userProfile.birthDay),
      email: userProfile.email,
      school: userProfile.school,
      district: userProfile.district
    });
    this.firstName = userProfile.firstName;
    this.lastname = userProfile.lastName;
    this.email = userProfile.email;
  }

  onSave(): void {
    const signUpUser = this.signUpForm.value as UserProfileModel;
    signUpUser.birthDay = new Date(this.signUpForm.value.birthDay).getTime();
    signUpUser.id = this.userProfile.id;
    this.userProfileApiService.updateUser(signUpUser)
      .subscribe(res => {
        this.store.dispatch(USER_DATA_LOADED({payload: res}));
      });
  }

}
