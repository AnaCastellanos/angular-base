import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private loginError = false;
  private subscription: Subscription = new Subscription();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subscription.add(this.authService.loginError.subscribe(
      (data:any)=> {
        this.loginError = true;
      }
    ))
  }

  onLogin(form: HTMLFormElement) {
    this.authService.signinUser(form.value.username, form.value.password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
