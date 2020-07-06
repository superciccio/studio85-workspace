import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdminService} from '../shared/admin.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {SelectValue} from '../../../../artisan-area/src/app/product-variant/product-variant.component';
import {ConfigService} from '../../../../artisan-area/src/app/shared/config.service';
import {RelationResponse} from '../relations/relations-datasource';

@Component({
  selector: 'app-new-relation',
  templateUrl: './new-relation.component.html',
  styleUrls: ['./new-relation.component.scss']
})
export class NewRelationComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;
  relationId: number;

  productTypes: SelectValue[] = [];
  productCategories: SelectValue[] = [];
  colors: SelectValue[] = [];
  materials: SelectValue[] = [];
  shapes: SelectValue[] = [];

  productTypeFormControl: number[] = [];
  productCategoryFormControl: number[] = [];
  colorFormControl: number[] = [];
  shapeFormControl: number[] = [];
  materialFormControl: number[] = [];

  constructor(private adminService: AdminService, private matSnackBar: MatSnackBar, private route: ActivatedRoute,
              private configService: ConfigService) {
    let lang = navigator.language;
    lang = lang.slice(0, 2);
    this.configService.getConfig().then((config) => {
      this.productTypes = this.filterByLang(lang, config.productTypes);
      this.productCategories = this.filterByLang(lang, config.categories);
      this.materials = this.filterByLang(lang, config.materials);
      this.colors = this.filterByLang(lang, config.colors);
      this.shapes = this.filterByLang(lang, config.shapes);
    });
  }

  filterByLang(lang: string, source: any[], ): any[] {
    const result = [];
    for (const s of source) {
      for (const intlValue of s.value) {
        if (intlValue.language === lang) {
          result.push({id: s.id, desc: intlValue});
        }
      }
    }

    return result;
  }


  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.relationId = params.id;
      this.adminService.fetchOneRelation(this.relationId).toPromise().then((resp: RelationResponse) => {
        this.productTypeFormControl = resp.productTypeId;
        this.colorFormControl = resp.colorId;
        this.shapeFormControl = resp.shapeId;
        this.productCategoryFormControl = resp.categoryId;
        this.materialFormControl = resp.materialId;
        }
    );
  });
  }

  compareSelectObject(object1: number, object2: number): boolean  {
    return object1 === object2;
  }

  save(): void {
    if (this.relationId !== undefined && this.relationId !== null){
      this.adminService.updateRelation({
        categoryId: this.productCategoryFormControl, colorId: this.colorFormControl,
        materialId: this.materialFormControl, productTypeId: this.productTypeFormControl,
        shapeId: this.shapeFormControl
      }, this.relationId).toPromise().then((resp) => {
        this.matSnackBar.open('Aggiornato', '', {duration: 650});
      });
    }else {
      this.adminService.newRelation({
        categoryId: this.productCategoryFormControl, colorId: this.colorFormControl,
        materialId: this.materialFormControl, productTypeId: this.productTypeFormControl,
        shapeId: this.shapeFormControl
      }).toPromise().then((resp) => {
        this.matSnackBar.open('Salvato', '', {duration: 650});
      });
    }
  }
}
