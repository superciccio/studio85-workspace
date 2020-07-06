import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AdminService} from '../shared/admin.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';
import {ShapeResponse} from '../shapes/shapes-datasource';

@Component({
  selector: 'app-new-shape',
  templateUrl: './new-shape.component.html',
  styleUrls: ['./new-shape.component.scss']
})
export class NewShapeComponent implements OnInit, OnDestroy {

  itaShapeValue = new FormControl();
  engShapeValue = new FormControl();
  shapeId: number;
  private routeSub: Subscription;

  constructor(private adminService: AdminService, private matSnackBar: MatSnackBar, private route: ActivatedRoute) {
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.shapeId = params.id;
      this.adminService.fetchOneShape(this.shapeId).toPromise().then((resp: ShapeResponse) => {
        for (const shapeResponseValue of resp.value) {
          if (shapeResponseValue.language === 'en') {
            this.engShapeValue.setValue(shapeResponseValue.shape);
            continue;
          }
          this.itaShapeValue.setValue(shapeResponseValue.shape);
        }
      });
    });
  }

  update(): void {
    this.adminService.updateShape(
      {
        value: [
          {language: 'en', shape: this.engShapeValue.value},
          {language: 'it', shape: this.itaShapeValue.value},
        ]
      }, this.shapeId
    ).toPromise().then((resp) => {
      this.matSnackBar.open('Salvato', '', {duration: 650});
    });
  }

  save(): void {
    if (this.shapeId !== undefined && this.shapeId !== null){
      this.update();
    } else {
      this.adminService.newShape(
        {
          value: [
            {language: 'en', shape: this.engShapeValue.value},
            {language: 'it', shape: this.itaShapeValue.value},
          ]
        }
      ).toPromise().then((resp) => {
        this.matSnackBar.open('Salvato', '', {duration: 650});
      });
    }

  }
}
