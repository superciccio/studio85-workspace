import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit, AfterViewInit {

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  surnameFormControl = new FormControl('', [
    Validators.required,
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  shopNameFormControl = new FormControl('', [

  ]);
  remindMePasswordFormControl = new FormControl(false, [

  ]);

  shopName = [
    'casa'.toLowerCase(),
    'azzurro'.toLowerCase(),
    'iron'.toLowerCase(),
    'andrea'.toLowerCase(),
  ];
  available = false;
  message = '';

  constructor(private snackBar: MatSnackBar) {

  }

search(): void {
  const sName = this.shopNameFormControl.value.trim().toLocaleLowerCase();
  this.available = this.shopName.includes(sName);
  if (this.available){
    this.message = 'Sorry is already taken, try another one.';

  } else {
    this.message = 'Great, this name is available';
  }
}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.shopNameFormControl.valueChanges.subscribe(val => {
      if (val.trim().length > 0){
        this.search();
      }
    });
  }

  resetPassword(): void {
    this.snackBar.open('A link has been sent to your email address', '', {duration: 650});
  }

  save(): void {
    this.snackBar.open('Information have been updated', '', {duration: 650});
  }
}
