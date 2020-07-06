import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-new-message-dialog',
  templateUrl: 'new-message-dialog.html',
  styleUrls: ['new-message-dialog.scss'],
})
export class NewMessageDialogComponent implements AfterViewInit{

  @ViewChild('textElement') textElement: ElementRef;


  constructor(private matSnackBar: MatSnackBar) {

  }


  send(): void{
    this.matSnackBar.open('Message sent, will be in touch as soon as possible', '',
      {duration: 750});
    // TODO backend
  }

  ngAfterViewInit(): void {
    this.textElement.nativeElement.onclick = () => {
      this.textElement.nativeElement.innerHTML = '';
    };
  }

}

