import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {CategoriesDataSource, CategoriesItem, CategoryResponse} from './categories-datasource';
import {AdminService} from '../shared/admin.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<CategoriesItem>;
  dataSource: CategoriesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'eng', 'ita', 'actions'];

  constructor(private adminService: AdminService) {
    this.dataSource = new CategoriesDataSource();
    this.dataSource.data = [];
    adminService.fetchAllCategories().toPromise().then((resp: CategoryResponse[]) => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      for (const respElement of resp) {
        // tslint:disable-next-line:one-variable-per-declaration
        let engCategory, itaCategory;
        for (const matResponseValue of respElement.value) {
          if (matResponseValue.language === 'en') {
            engCategory = matResponseValue.category;
            continue;
          }
          itaCategory = matResponseValue.category;
        }
        this.dataSource.data.push({eng: engCategory, id: respElement.id, ita: itaCategory});
      }
    });
  }


  deleteCategory(id: number): void {
    this.adminService.deleteCategory(id).toPromise().then((resp) => {
      window.location.reload();
    });
  }
}
