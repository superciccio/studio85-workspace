import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {ColorResponse, ColorsDataSource, ColorsItem} from './colors-datasource';
import {AdminService} from '../shared/admin.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ColorsItem>;
  dataSource: ColorsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'eng', 'ita', 'actions'];

  constructor(private adminService: AdminService) {
    this.dataSource = new ColorsDataSource();
    this.dataSource.data = [];
    adminService.fetchAll().toPromise().then((resp: ColorResponse[]) => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      for (const respElement of resp) {
        // tslint:disable-next-line:one-variable-per-declaration
        let engColor, itaColor;
        for (const colorResponseValue of respElement.value) {
          if (colorResponseValue.language === 'en') {
            engColor = colorResponseValue.color;
            continue;
          }
          itaColor = colorResponseValue.color;
        }
        this.dataSource.data.push({eng: engColor, id: respElement.id, ita: itaColor});
      }
    });
  }


  deleteColor(id: number): void {
    this.adminService.deleteColor(id).toPromise().then((resp) => {
      window.location.reload();
    });
  }
}
