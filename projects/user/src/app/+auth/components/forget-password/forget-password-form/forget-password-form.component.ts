import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserAuthService} from '../../../shared/services/user-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forget-password-form',
  templateUrl: './forget-password-form.component.html',
  styleUrls: ['./forget-password-form.component.scss']
})
export class ForgetPasswordFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);


  @HostListener('window:keydown', ['$event'])
  onClick(kbdEvent: KeyboardEvent): void {
    if (kbdEvent.code === 'Enter') {
      this.onReset();
    }
  }


  constructor(private userApiService: UserAuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onReset(): void {
    this.userApiService.forgetPassword(this.email.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['']);
      });
  }
}
