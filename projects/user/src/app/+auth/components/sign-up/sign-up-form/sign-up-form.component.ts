import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserSignUpModel} from '../../../../@core/interfaces/api/UserSignUpModel';
import {UserAuthService} from '../../../shared/services/user-auth.service';
import {AlertService} from '../../../../../../../lib/tools/src/lib/alert.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  signUpForm = {} as FormGroup;

  @HostListener('window:keydown', ['$event'])
  onClick(kbdEvent: KeyboardEvent): void {
    if (kbdEvent.code === 'Enter') {
      this.onSignUp();
    }
  }


  constructor(private userApiService: UserAuthService,
              private router: Router,
              private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      telephoneNumber: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      birthDay: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      school: new FormControl(null, [Validators.required]),
      district: new FormControl(null, [Validators.required]),
      referralLink: new FormControl(null),
    });
  }

  onSignUp(): void {

    if (!this.signUpForm.valid) {
      this.signUpForm.markAllAsTouched();
      this.alertService.showError('Please check your inputs again');
      return;
    }
    this.alertService.showConfirmationDialog()
      .subscribe(res => {
        if (res) {
          const postData = this.signUpForm.value as UserSignUpModel;
          const date = new Date(postData.birthDay);
          postData.birthDay = date.getTime();

          // Dialog Box
          this.postToServer(postData);
        }
      });


  }

  private postToServer(signUpData: UserSignUpModel): void {
    this.userApiService.signUpUser(signUpData)
      .subscribe(res => {
        this.signUpForm.reset(null);
        this.router.navigate(['']);
      });
  }
}
