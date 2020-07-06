import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  emailFormControl = new FormControl();
  passwordFormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {}

}
