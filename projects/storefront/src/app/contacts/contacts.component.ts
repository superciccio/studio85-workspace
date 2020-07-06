import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  nameFormControl = new FormControl();
  emailFormControl = new FormControl();
  msgFormControl = new FormControl();


  constructor() { }

  ngOnInit(): void {
  }

}
