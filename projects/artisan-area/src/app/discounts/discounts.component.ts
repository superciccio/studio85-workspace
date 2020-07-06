import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewMessageDialogComponent} from '../messages/new-message-dialog.component';
import {NewDiscountDialogComponentComponent} from './new-discount-dialog-component/new-discount-dialog-component.component';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.scss']
})
export class DiscountsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDiscountDialog(): void {
    const dialogRef = this.dialog.open(NewDiscountDialogComponentComponent, {width: 'auto', height: 'auto'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
