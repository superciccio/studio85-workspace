import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AdminService} from '../shared/admin.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {MaterialResponse} from '../materials/materials-datasource';

@Component({
  selector: 'app-new-material',
  templateUrl: './new-material.component.html',
  styleUrls: ['./new-material.component.scss']
})
export class NewMaterialComponent implements OnInit, OnDestroy {
  itaMaterialValue = new FormControl();
  engMaterialValue = new FormControl();
  materialId: number;
  private routeSub: Subscription;

  constructor(private adminService: AdminService, private matSnackBar: MatSnackBar, private route: ActivatedRoute) {
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.materialId = params.id;
      this.adminService.fetchOneMaterial(this.materialId).toPromise().then((resp: MaterialResponse) => {
        for (const materialResponseValue of resp.value) {
          if (materialResponseValue.language === 'en') {
            this.engMaterialValue.setValue(materialResponseValue.material);
            continue;
          }
          this.itaMaterialValue.setValue(materialResponseValue.material);
        }
      });
    });
  }

  update(): void {
    this.adminService.updateMaterial(
      {
        value: [
          {language: 'en', material: this.engMaterialValue.value},
          {language: 'it', material: this.itaMaterialValue.value},
        ]
      }, this.materialId
    ).toPromise().then((resp) => {
      this.matSnackBar.open('Salvato', '', {duration: 650});
    });
  }

  save(): void {
    if (this.materialId !== undefined && this.materialId !== undefined){
      this.update();
    } else {
      this.adminService.newMaterial(
        {
          value: [
            {language: 'en', material: this.engMaterialValue.value},
            {language: 'it', material: this.itaMaterialValue.value},
          ]
        }
      ).toPromise().then((resp) => {
        this.matSnackBar.open('Salvato', '', {duration: 650});
      });
    }

  }
}
