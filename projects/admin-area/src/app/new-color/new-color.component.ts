import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AdminService} from '../shared/admin.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ColorResponse} from '../colors/colors-datasource';

@Component({
  selector: 'app-new-color',
  templateUrl: './new-color.component.html',
  styleUrls: ['./new-color.component.scss']
})
export class NewColorComponent implements OnInit, OnDestroy {
  itaColorValue = new FormControl();
  engColorValue = new FormControl();
  private routeSub: Subscription;
  idColor;

  constructor(private adminService: AdminService, private matSnackBar: MatSnackBar, private route: ActivatedRoute) {

  }


  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }


  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.idColor = params.id;
      this.adminService.fetchOneColor(this.idColor).toPromise().then((resp: ColorResponse) => {
          for (const colorResponseValue of resp.value) {
            if (colorResponseValue.language === 'en') {
              this.engColorValue.setValue(colorResponseValue.color);
              continue;
            }
            this.itaColorValue.setValue(colorResponseValue.color);
        }
      });
    });
  }

  back(): void {
    window.history.back();
  }

  update(): void {
    this.adminService.updateColor(
      {
        value: [
          {language: 'en', color: this.engColorValue.value},
          {language: 'it', color: this.itaColorValue.value},
        ]
      }, this.idColor
    ).toPromise().then((resp) => {
      this.matSnackBar.open('Aggiornato', '', {duration: 650});
    });
  }

  save(): void {
    if (this.idColor !== null && this.idColor !== undefined){
      this.update();
    } else {
      this.adminService.newColor(
        {
          value: [
            {language: 'en', color: this.engColorValue.value},
            {language: 'it', color: this.itaColorValue.value},
          ]
        }
      ).toPromise().then((resp) => {
        this.matSnackBar.open('Salvato', '', {duration: 650});
      });
    }
  }
}
