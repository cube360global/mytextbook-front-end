import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserSignUpModel} from "../../../../@core/interfaces/api/UserSignUpModel";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  signUpForm = {} as FormGroup;

  constructor() {
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
      referralLink: new FormControl(null, [Validators.required]),
    });
  }

  onSignUp(): void{
    if (!this.signUpForm.valid){
      this.signUpForm.markAllAsTouched();
      return;
    }
    const postData = this.signUpForm.value as UserSignUpModel;
    console.log(postData);
    const date = new Date('2017-10-05');
    console.log(date.getUTCDay());
  }

}
