import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-forget-password-form',
  templateUrl: './forget-password-form.component.html',
  styleUrls: ['./forget-password-form.component.scss']
})
export class ForgetPasswordFormComponent implements OnInit {
  email = new FormControl('', [Validators.required]);
  constructor() {
  }
  ngOnInit(): void {
  }

  onReset(): void {
  }
}
