import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../app.reducer';
import {UserProfileModel} from '../../../../../../@core/interfaces/api/UserProfileModel';

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent implements OnInit {

  userProfile = {} as UserProfileModel;
  signUpForm = {} as FormGroup;
  hide = true;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.initForm();
    this.store.select(fromApp.getUserProfileReducer).subscribe(res => {
      if (res.user.id != null) {
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
      birthDay: userProfile.birthDay,
      email: userProfile.email,
      school: userProfile.school,
      district: userProfile.district
    });
  }

  onSignUp(): void {

  }

}
