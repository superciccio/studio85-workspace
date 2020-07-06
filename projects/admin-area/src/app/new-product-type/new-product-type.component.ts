import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AdminService} from '../shared/admin.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductTypeResponse} from '../product-types/product-type-datasource';

@Component({
  selector: 'app-new-product-type',
  templateUrl: './new-product-type.component.html',
  styleUrls: ['./new-product-type.component.scss']
})
export class NewProductTypeComponent implements OnInit, OnDestroy {
  itaProductTypeValue = new FormControl();
  engProductTypeValue = new FormControl();
  productTypeId: number;
  private routeSub: Subscription;

  constructor(private adminService: AdminService, private matSnackBar: MatSnackBar, private route: ActivatedRoute) {
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.productTypeId = params.id;
      this.adminService.fetchOneProductType(this.productTypeId).toPromise().then((resp: ProductTypeResponse) => {
        for (const productTypeResponseValue of resp.value) {
          if (productTypeResponseValue.language === 'en') {
            this.engProductTypeValue.setValue(productTypeResponseValue.productType);
            continue;
          }
          this.itaProductTypeValue.setValue(productTypeResponseValue.productType);
        }
      });
    });
  }

  update(): void {
    this.adminService.updateProductType(
      {
        value: [
          {language: 'en', productType: this.engProductTypeValue.value},
          {language: 'it', productType: this.itaProductTypeValue.value},
        ]
      }, this.productTypeId
    ).toPromise().then((resp) => {
      this.matSnackBar.open('Salvato', '', {duration: 650});
    });
  }

  save(): void {
    if (this.productTypeId !== undefined && this.productTypeId !== null){
      this.update();
    } else {
      this.adminService.newProductType(
        {
          value: [
            {language: 'en', productType: this.engProductTypeValue.value},
            {language: 'it', productType: this.itaProductTypeValue.value},
          ]
        }
      ).toPromise().then((resp) => {
        this.matSnackBar.open('Salvato', '', {duration: 650});
      });
    }

  }
}
