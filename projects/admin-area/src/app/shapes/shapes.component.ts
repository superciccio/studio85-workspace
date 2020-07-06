import {Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {ShapeResponse, ShapesDataSource, ShapesItem} from './shapes-datasource';
import {AdminService} from '../shared/admin.service';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.scss']
})
export class ShapesComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ShapesItem>;
  dataSource: ShapesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'eng', 'ita', 'actions'];

  constructor(private adminService: AdminService) {
    this.dataSource = new ShapesDataSource();
    this.dataSource.data = [];
    adminService.fetchAllShapes().toPromise().then((resp: ShapeResponse[]) => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      for (const respElement of resp) {
        // tslint:disable-next-line:one-variable-per-declaration
        let engShape, itaShape;
        for (const matResponseValue of respElement.value) {
          if (matResponseValue.language === 'en') {
            engShape = matResponseValue.shape;
            continue;
          }
          itaShape = matResponseValue.shape;
        }
        this.dataSource.data.push({eng: engShape, id: respElement.id, ita: itaShape});
      }
    });
  }

  deleteShape(id: number): void {
    this.adminService.deleteShape(id).toPromise().then((resp) => {
      window.location.reload();
    });
  }
}
