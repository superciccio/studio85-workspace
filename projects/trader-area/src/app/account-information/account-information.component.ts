import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.scss']
})
export class AccountInformationComponent implements OnInit {

  firstNameFormControl = new FormControl();
  lastNameFormControl = new FormControl();
  emailFormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
