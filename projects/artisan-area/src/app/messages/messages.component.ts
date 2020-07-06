import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewMessageDialogComponent} from './new-message-dialog.component';
import {MatDialogConfig} from '@angular/material/dialog/dialog-config';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openNewMessageDialog(): void{
    const dialogRef = this.dialog.open(NewMessageDialogComponent, {width: 'auto', height: 'auto'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
