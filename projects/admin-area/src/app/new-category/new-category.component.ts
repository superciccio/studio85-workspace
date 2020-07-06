import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AdminService} from '../shared/admin.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';
import {CategoryResponse} from '../categories/categories-datasource';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit, OnDestroy {

  itaCategoryValue = new FormControl();
  engCategoryValue = new FormControl();
  categoryId: number;
  private routeSub: Subscription;

  constructor(private adminService: AdminService, private matSnackBar: MatSnackBar, private route: ActivatedRoute) {
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.categoryId = params.id;
      this.adminService.fetchOneCategory(this.categoryId).toPromise().then((resp: CategoryResponse) => {
        for (const categoryResponseValue of resp.value) {
          if (categoryResponseValue.language === 'en') {
            this.engCategoryValue.setValue(categoryResponseValue.category);
            continue;
          }
          this.itaCategoryValue.setValue(categoryResponseValue.category);
        }
      });
    });
  }

  update(): void {
    this.adminService.updateCategory(
      {
        value: [
          {language: 'en', category: this.engCategoryValue.value},
          {language: 'it', category: this.itaCategoryValue.value},
        ]
      }, this.categoryId
    ).toPromise().then((resp) => {
      this.matSnackBar.open('Salvato', '', {duration: 650});
    });
  }

  save(): void {
    if (this.categoryId !== undefined && this.categoryId !== null){
      this.update();
    } else {
      this.adminService.newCategory(
        {
          value: [
            {language: 'en', category: this.engCategoryValue.value},
            {language: 'it', category: this.itaCategoryValue.value},
          ]
        }
      ).toPromise().then((resp) => {
        this.matSnackBar.open('Salvato', '', {duration: 650});
      });
    }

  }

}
