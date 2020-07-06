import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-discount-dialog-component',
  templateUrl: './new-discount-dialog-component.component.html',
  styleUrls: ['./new-discount-dialog-component.component.scss']
})
export class NewDiscountDialogComponentComponent implements OnInit {
  products = new FormControl();


  productList : Product[] = [
    {id: 1, name: 'Prod-11'},
    {id: 4, name: 'Prod-14344334'},
    {id: 34, name: 'Prod-14]34433454gththtrhghdsjgsjgb'},
    {id: 2, name: 'Prod-165'},
    {id: 56, name: 'Prod-5'},
  ]
  discount= new FormControl();

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  save(): void {
    this.snackBar.open('Discount saved', '' , {duration: 650});
    window.location.reload();
  }

}

export interface Product {
  id: number;
  name: string;
}
