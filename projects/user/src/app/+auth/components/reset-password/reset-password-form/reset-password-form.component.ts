import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {
  passwordFormControl = new FormControl('', [Validators.required]);
  showDetails = true;
  hide = true;
  hide2 = true;
  constructor() { }

  ngOnInit(): void {
  }
  onStrengthChanged(strength: number): void {
    console.log('password strength = ', strength);
  }

}
